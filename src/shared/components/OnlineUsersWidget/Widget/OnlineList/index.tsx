import { useMemo, useState } from "react";

import Header from "./Header";
import UsersList from "./List";
import SearchBar from "./SearchBar";

import type { OnlineListProps } from "../../types";

const StyledContent = "max-h-96 overflow-y-auto show-y-scrollbar";

const OnlineList = ({ users, isLoading, currentUser, onUserClick }: OnlineListProps) => {
    const [searchQuery, setSearchQuery] = useState("");

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

    return <>
        <Header users={users} />
        {!currentUser?.guest && <SearchBar value={searchQuery} onChange={setSearchQuery} isLoading={isLoading} />}
        <div className={StyledContent}>
            <UsersList 
                users={filteredUsers} 
                isLoading={isLoading}
                onUserClick={onUserClick}
                searchQuery={searchQuery}
                currentUser={currentUser} 
            />
        </div>
    </> 
}

export default OnlineList