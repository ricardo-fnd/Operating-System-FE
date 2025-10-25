import { forwardRef, useState } from "react";

import Chat from "./Chat";
import OnlineList from "./OnlineList";

import { UsersService } from "src/services/client";

import type { WidgetProps } from "../types";
import type { User } from "src/types";

const StyledWidget = `fixed bottom-32 right-4 bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden z-40 transition-all duration-300 ease-out
  data-[open=true]:opacity-100 data-[open=true]:scale-100 data-[open=true]:translate-y-0
  data-[open=false]:opacity-0 data-[open=false]:scale-95 data-[open=false]:translate-y-2 data-[open=false]:pointer-events-none
  data-[view=list]:min-w-48 data-[view=list]:max-w-80
  data-[view=chat]:w-80 data-[view=chat]:h-96`;

const OnlineUsersWidget = forwardRef<HTMLDivElement, WidgetProps>((props, ref) => {
  const [chatUser, setChatUser] = useState<User | null>(null);
  
  const { users, isOpen, isLoading } = props;
  const { data: currentUser } = UsersService.useMe();

  const handleUserClick = (user: User) => setChatUser(user)
  const handleBackToList = () => setChatUser(null)

  const handleSendMessage = (message: string, targetUserId: number) => {
    // TODO: Implement message sending via WebSocket
    console.log("Sending message:", message, "to user:", targetUserId);
  };

  return (
    <section 
      ref={ref} 
      data-open={isOpen}
      data-view={chatUser ? "chat" : "list"}
      className={StyledWidget}
      id="online-users-widget" 
    >
      {chatUser ? (
        <Chat
          currentUser={currentUser as User}
          targetUser={chatUser}
          onBack={handleBackToList}
          onSendMessage={handleSendMessage}
        />
      ) : (
        <OnlineList 
          users={users} 
          isLoading={isLoading} 
          onUserClick={handleUserClick}
          currentUser={currentUser as User}
        />
      )}
    </section>
  );
})

OnlineUsersWidget.displayName = "OnlineUsersWidget";

export default OnlineUsersWidget;

