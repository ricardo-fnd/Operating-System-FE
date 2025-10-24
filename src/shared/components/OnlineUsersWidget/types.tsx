import type { User } from "src/types";

type WidgetProps = {
  users: User[];
  isOpen: boolean;
  isLoading?: boolean;
};

type UsersListProps = {
  users: User[];
  searchQuery?: string;
  currentUser: User;
  isLoading?: boolean;
};
 
type OnlineUserProps = {
  user: User;
  currentUser: User;
};

export type { UsersListProps, OnlineUserProps, WidgetProps };