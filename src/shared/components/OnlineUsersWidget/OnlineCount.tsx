import { useWebSocket } from "src/context";

const StyledBadge = "absolute -top-1.5 -right-1.5 flex items-center justify-center w-5 h-5 bg-orange-500 text-white text-xs font-bold rounded-full";

const OnlineCount = () => {
  const { onlineUsersCount } = useWebSocket();

  return (
    <div className={StyledBadge}>
      {onlineUsersCount > 9 ? '9+' : onlineUsersCount}
    </div>
  )
}

export default OnlineCount;