import { useQueryClient } from "@tanstack/react-query";

import { useWebSocket } from "src/context";
import { QUERIES_KEYS } from "src/enums";

import type { User } from "src/types";

const StyledBadge = "absolute -top-1.5 -right-1.5 flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full";

const UnreadMessages = () => {
  const { messages } = useWebSocket();
  const queryClient = useQueryClient();
  const currentUser = queryClient.getQueryData<User>([QUERIES_KEYS.user]);

  const unreadUsers = new Set<number>();
  
  messages.forEach((chatMessages) => {
    const unreadMessage = chatMessages.find(data => 
      data.senderId !== currentUser!.id && !data.read
    );
    if (unreadMessage) unreadUsers.add(unreadMessage.senderId)
  });
  
  if (unreadUsers.size === 0) return null;

  return (
    <div className={StyledBadge}>
      {unreadUsers.size > 9 ? '9+' : unreadUsers.size}
    </div>
  )
}

export default UnreadMessages;
