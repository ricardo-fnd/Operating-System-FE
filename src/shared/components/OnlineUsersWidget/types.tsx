import type { User } from "src/types";

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
  onSendMessage: (message: string, targetUserId: number) => void;
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
  messages: Message[];
  currentUser: User;
}

type Message = {
  id: string;
  senderId: number;
  content: string;
  timestamp: Date;
}

export type { UsersListProps, OnlineUserProps, WidgetProps, OnlineListProps, ChatProps, TextAreaProps, ChatMessagesProps, HeaderProps, Message };