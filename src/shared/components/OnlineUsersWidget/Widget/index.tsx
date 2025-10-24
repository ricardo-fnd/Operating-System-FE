import { forwardRef, useState, useMemo } from "react";

import Header from "./Header";
import UsersList from "./List";
import SearchBar from "./SearchBar";

import { UsersService } from "src/services/client";

import type { WidgetProps } from "../types";
import type { User } from "src/types";

const StyledWidget = `fixed bottom-32 right-4 min-w-48 max-w-80 bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden z-40 transition-all duration-300 ease-out
  data-[open=true]:opacity-100 data-[open=true]:scale-100 data-[open=true]:translate-y-0
  data-[open=false]:opacity-0 data-[open=false]:scale-95 data-[open=false]:translate-y-2 data-[open=false]:pointer-events-none`;
const StyledContent = "max-h-96 overflow-y-auto show-y-scrollbar";

const OnlineUsersWidget = forwardRef<HTMLDivElement, WidgetProps>((props, ref) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const { users, isOpen, isLoading } = props;
  const { data: currentUser } = UsersService.useMe();

  const filteredUsers = useMemo(() => {
    if (!searchQuery.trim()) return users
    
    const query = searchQuery.toLowerCase();
    return users.filter((user) => {
      const username = user.username?.toLowerCase() || "";
      const name = user.name?.toLowerCase() || "";
      const email = user.email?.toLowerCase() || "";
      
      return username.includes(query) || name.includes(query) || email.includes(query);
    });
  }, [users, searchQuery]);

  return (
    <section 
      ref={ref} 
      data-open={isOpen}
      className={StyledWidget}
      id="online-users-widget" 
    >
     <Header users={users} />
      {!currentUser?.guest && <SearchBar value={searchQuery} onChange={setSearchQuery} isLoading={isLoading} />}
      <div className={StyledContent}>
        <UsersList 
          currentUser={currentUser as User} 
          users={filteredUsers} 
          searchQuery={searchQuery}
          isLoading={isLoading} 
        />
      </div>
    </section>
  );
})

OnlineUsersWidget.displayName = "OnlineUsersWidget";

export default OnlineUsersWidget;

