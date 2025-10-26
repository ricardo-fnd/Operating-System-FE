import { useEffect, useRef } from "react";

import type { ChatMessagesProps } from "../../types";

const StyledMessages = "flex-1 overflow-y-auto p-3 space-y-2";
const StyledNoMessages = "text-center text-slate-500 text-sm py-8";
const StyledMessage = "flex gap-2";
const StyledMessageContent = "bg-slate-100 rounded-lg px-3 py-2 text-sm max-w-[80%]";
const StyledOwnMessage = "flex justify-end";
const StyledOwnMessageContent = "bg-blue-500 text-white rounded-lg px-3 py-2 text-sm max-w-[80%]";

const ChatMessages = ({ messages, currentUser }: ChatMessagesProps) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages]);

    if (messages.length === 0) {
        return (
            <div className={StyledMessages}>
                <div className={StyledNoMessages}>
                    chat.no-messages
                </div>
            </div>
        );
    }

    return (
        <div className={StyledMessages}>
            {messages?.map(({id, senderId, content}) => (
                <div key={id} className={senderId === currentUser.id ? StyledOwnMessage : StyledMessage}>
                    <div className={senderId === currentUser.id ? StyledOwnMessageContent : StyledMessageContent}>
                        <span>{content}</span>
                    </div>
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default ChatMessages;