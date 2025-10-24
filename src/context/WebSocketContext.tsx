"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { useLabels } from "src/services/client";
import { API_URL } from "src/env-variables";
import { QUERIES_KEYS } from "src/enums";
import NotificationsService from "src/services/notifications-service";

import type { Provider } from "./types";
import type { User, WebSocketMessage } from "src/types";

const WebSocketContext = createContext<{ onlineUsersCount: number }>({
  onlineUsersCount: 0,
});
export const useWebSocket = () => useContext(WebSocketContext);

export const WebSocketProvider = ({ children }: Provider) => {
  const getLabel = useLabels();
  const queryClient = useQueryClient();
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout>();
  const [onlineUsersIds, setOnlineUsersIds] = useState<Set<number>>(new Set());

  const connect = () => {
    const currentUser = queryClient.getQueryData<User>([QUERIES_KEYS.user]);
    if (!currentUser || currentUser.guest) return
    
    try {
      const WS_URL = API_URL?.replace("https://", "wss://").replace("http://", "ws://");
      const ws = new WebSocket(`${WS_URL}/online-users/ws`);

      ws.onmessage = async (event) => {
        const message: WebSocketMessage = JSON.parse(event.data);
        
        switch (message.type) {
          case "online_users":
            if (message.user_ids) setOnlineUsersIds(new Set(message.user_ids))
            break;
          case "user_online":
            if (message.user) {
              setOnlineUsersIds(prev => {
                const newSet = new Set(prev);
                newSet.add(message.user!.id);
                return newSet;
              });
              
              if (currentUser && message.user.id !== currentUser.id) {
                NotificationsService.online(getLabel("online-users.online-toast", { name: message.user.name }));
              }
            }
            break;
          case "user_offline":
            if (message.user) {
              setOnlineUsersIds(prev => {
                const newSet = new Set(prev);
                newSet.delete(message.user!.id);
                return newSet;
              });
              
              if (currentUser && message.user.id !== currentUser.id) {
                NotificationsService.offline(getLabel("online-users.offline-toast", { name: message.user.name }));
              }
            }
        }
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

  return (
    <WebSocketContext.Provider value={{ onlineUsersCount: onlineUsersIds.size }}>
      {children}
    </WebSocketContext.Provider>
  );
};
