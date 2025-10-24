import Loading from "../../Loading";
import OnlineUser from "./OnlineUser";

import { useLabels } from "src/services/client";

import type { UsersListProps } from "../types";

const StyledEmpty = "flex flex-col items-center justify-center py-3 px-4 text-sm font-medium text-slate-400";
const StyledList = "divide-y divide-slate-200";
const StyledLoading = "w-8 h-8 my-4 mx-auto";

const UsersList = ({ users, searchQuery, currentUser, isLoading }: UsersListProps) => {
  const getLabel = useLabels();

  if (isLoading) return <Loading className={StyledLoading} />

  if (currentUser?.guest) {
    return (
      <div className={StyledEmpty}>
        <p>{getLabel("online-users.guest-empty")}</p>
      </div>
    );
  }

  if (!users.length && searchQuery) {
    return (
      <div className={StyledEmpty}>
        <p>{getLabel("online-users.search-empty")}</p>
      </div>
    );
  }

  const sortedAlphabetically = [...users].sort((a, b) => {
    const isCurrentUserA = currentUser?.id === a.id;
    const isCurrentUserB = currentUser?.id === b.id;
    
    if (isCurrentUserA) return -1;
    if (isCurrentUserB) return 1;

    const nameA = ((a.name ?? a.username) as string).toLowerCase();
    const nameB = ((b.name ?? b.username) as string).toLowerCase();
    return nameA.localeCompare(nameB);
  });

  return (
    <div className={StyledList}>
      {sortedAlphabetically.map((user) => (
        <OnlineUser key={user.id} user={user} currentUser={currentUser} />
      ))}
    </div>
  );
};

export default UsersList