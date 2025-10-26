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

  return (
    <section 
      ref={ref} 
      id="online-users-widget" 
      data-open={isOpen}
      data-view={chatUser ? "chat" : "list"}
      className={StyledWidget}
    >
      {chatUser ? (
        <Chat
          targetUser={chatUser}
          currentUser={currentUser as User}
          onBack={() => setChatUser(null)}
        />
      ) : (
        <OnlineList 
          users={users} 
          isLoading={isLoading} 
          onUserClick={setChatUser}
          currentUser={currentUser as User}
        />
      )}
    </section>
  );
})

OnlineUsersWidget.displayName = "OnlineUsersWidget";

export default OnlineUsersWidget;

