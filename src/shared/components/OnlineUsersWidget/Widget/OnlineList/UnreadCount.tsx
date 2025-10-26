import { useWebSocket } from "src/context";

const StyledUnreadBadge = "absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] bg-red-500 text-white text-xs font-bold rounded-full px-1";

const UnreadCount = ({ userId }: { userId: number }) => {
  const { messages } = useWebSocket();
  const chatMessages = messages.get(userId) || [];

    const unreadCount = chatMessages.filter(data => 
      data.senderId === userId && !data.read
    ).length;

  if (!unreadCount) return null;

  return (
    <div className={StyledUnreadBadge}>
      {unreadCount > 9 ? '9+' : unreadCount}
    </div>
  );
}

export default UnreadCount;