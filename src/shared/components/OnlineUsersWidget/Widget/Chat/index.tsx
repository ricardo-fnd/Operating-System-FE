import { useState, useEffect } from "react";

import Header from "./Header";
import ChatMessages from "./ChatMessages";
import TextArea from "./TextArea";

import { useWebSocket } from "src/context";

import type { ChatProps } from "../../types";

const StyledChat = "flex flex-col h-full";

const Chat = ({ currentUser, targetUser, onBack }: ChatProps) => {
  const [message, setMessage] = useState("");
  const { messages, sendMessage, markAsRead, addMessage } = useWebSocket();

  useEffect(() => markAsRead(targetUser.id), [messages, targetUser.id]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      content: message.trim(),
      senderId: currentUser.id,
      receiverId: targetUser.id,
      timestamp: new Date().toString(),
    };

    addMessage(newMessage);
    sendMessage(newMessage);
    setMessage("");
  };

  return (
    <div className={StyledChat}>
      <Header onBack={onBack} targetUser={targetUser} />
      <ChatMessages messages={messages.get(targetUser.id) || []} currentUser={currentUser} />
      <TextArea message={message} setMessage={setMessage} handleSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
