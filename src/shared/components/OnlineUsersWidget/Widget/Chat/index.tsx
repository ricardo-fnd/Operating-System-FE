import { useState } from "react";

import Header from "./Header";
import ChatMessages from "./ChatMessages";
import TextArea from "./TextArea";

import type { ChatProps, Message } from "../../types";

const StyledChat = "flex flex-col h-full";

const Chat = ({ currentUser, targetUser, onBack, onSendMessage }: ChatProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<Message>>([]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      content: message.trim(),
      senderId: currentUser.id,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    onSendMessage(message.trim(), targetUser.id);
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
