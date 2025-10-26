import type { User, WebSocketMessage } from "src/types";

type WidgetProps = {
  users: User[];
  isOpen: boolean;
  isLoading?: boolean;
};

type OnlineListProps = {
  users: User[];
  currentUser: User;
  isLoading?: boolean;
  onUserClick: (user: User) => void;
};

type UsersListProps = OnlineListProps & {
  searchQuery?: string;
};

type OnlineUserProps = {
  user: User;
  currentUser: User;
  onUserClick: (user: User) => void;
};

type ChatProps = {
  currentUser: User;
  targetUser: User;
  onBack: () => void;
};

type HeaderProps = {
  onBack: () => void;
  targetUser: User;
}

type TextAreaProps = {
  message: string;
  setMessage: (message: string) => void;
  handleSendMessage: () => void;
}

type ChatMessagesProps = {
  messages: Array<WebSocketMessage['data'] & { read: boolean }>;
  currentUser: User;
}

export type { UsersListProps, OnlineUserProps, WidgetProps, OnlineListProps, ChatProps, TextAreaProps, ChatMessagesProps, HeaderProps };