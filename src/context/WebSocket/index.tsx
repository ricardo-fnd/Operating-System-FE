"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useLabels } from "src/services/client";
import { API_URL } from "src/env-variables";
import { QUERIES_KEYS } from "src/enums";
import { handleWebSocketMessage } from "./messageHandler";

import type { Provider, WebSocketContextProps } from "../types";
import type { User, WebSocketMessage } from "src/types";

const WebSocketContext = createContext<WebSocketContextProps>({
  messages: new Map(),
  sendMessage: () => {},
  markAsRead: () => {},
  addMessage: () => {},
});
export const useWebSocket = () => useContext(WebSocketContext);

export const WebSocketProvider = ({ children }: Provider) => {
  const getLabel = useLabels();
  const queryClient = useQueryClient();
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout>();
  const [messages, setMessages] = useState<WebSocketContextProps['messages']>(new Map());
  
  const connect = () => {
    const currentUser = queryClient.getQueryData<User>([QUERIES_KEYS.user]);
    if (!currentUser || currentUser.guest) return
    
    try {
      const WS_URL = API_URL?.replace("https://", "wss://").replace("http://", "ws://");
      const ws = new WebSocket(`${WS_URL}/online-users/ws`);

      ws.onmessage = async (event) => {
        const message: WebSocketMessage = JSON.parse(event.data);
        handleWebSocketMessage({ message, currentUser, getLabel, addMessage });
      };

      ws.onclose = () => reconnectTimeoutRef.current = setTimeout(connect, 3000)

      wsRef.current = ws;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
      if (event?.query?.queryKey?.[0] === QUERIES_KEYS.user) {
        const user = queryClient.getQueryData<User>([QUERIES_KEYS.user]);
        
        if (user && !user.guest && !wsRef.current) {
          connect();
        } else if ((!user || user.guest) && wsRef.current) {
          wsRef.current.close();
          wsRef.current = null;
        }
      }
    });

    const user = queryClient.getQueryData<User>([QUERIES_KEYS.user]);
    if (user && !user.guest) connect()

    return () => {
      unsubscribe();
      if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current)
      if (wsRef.current) wsRef.current.close()
    };
  }, []);

  const sendMessage = (data: WebSocketMessage['data']) => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
      return console.error("WebSocket not connected");
    }

    const currentUser = queryClient.getQueryData<User>([QUERIES_KEYS.user]);
    if (!currentUser) return console.error("Current user not found");

    wsRef.current.send(JSON.stringify({ type: "chat_message_sent", data }));
  };

  const addMessage = (data: NonNullable<WebSocketMessage['data']>) => {
    const currentUser = queryClient.getQueryData<User>([QUERIES_KEYS.user]);
    const chatKey = data.senderId === currentUser!.id ? data.receiverId : data.senderId;
    
    setMessages(prev => {
      const chatMessages = prev.get(chatKey) || [];
      if (chatMessages.some(msg => msg.id === data.id)) return prev;
      return new Map(prev).set(chatKey, [...chatMessages, { ...data, read: data.senderId === currentUser!.id }]);
    });
  };

  const markAsRead = (userId: number) => {
    setMessages(prev => {
      const chatMessages = prev.get(userId) || [];
      const updatedMessages = chatMessages.map(data => ({ ...data, read: true }));
      return new Map(prev).set(userId, updatedMessages);
    });
  };

  return (
    <WebSocketContext.Provider value={{ messages, sendMessage, markAsRead, addMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};
