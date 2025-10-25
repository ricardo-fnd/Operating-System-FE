import { useState, useEffect } from "react";

import Header from "./Header";
import ChatMessages from "./ChatMessages";
import TextArea from "./TextArea";

import { useWebSocket } from "src/context";

import type { ChatMessagesProps, ChatProps } from "../../types";

const StyledChat = "flex flex-col h-full";

const Chat = ({ currentUser, targetUser, onBack }: ChatProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessagesProps['messages']>([]);
  const { sendMessage } = useWebSocket();

  useEffect(() => {
    const handleMessageReceived = (event: CustomEvent) => {
      const data: ChatMessagesProps['messages'][number] = event.detail;
      if (data!.senderId !== currentUser.id) setMessages(prev => [...prev, data])
    };

    window.addEventListener('chatMessageReceived', handleMessageReceived as EventListener);
    return () => {
      window.removeEventListener('chatMessageReceived', handleMessageReceived as EventListener);
    };
  }, [currentUser.id]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      content: message.trim(),
      senderId: currentUser.id,
      receiverId: targetUser.id,
      timestamp: new Date().toString(),
    };

    setMessages(prev => [...prev, newMessage]);
    sendMessage(newMessage);
    setMessage("");
  };

  return (
    <div className={StyledChat}>
      <Header onBack={onBack} targetUser={targetUser} />
      <ChatMessages messages={messages} currentUser={currentUser} />
      <TextArea message={message} setMessage={setMessage} handleSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
