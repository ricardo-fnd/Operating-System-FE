import { useEffect, useState } from "react";

import Icon from "./Icon";

import type { NotificationItemProps } from "./types";

const StyledNotification = `bg-zinc-900/95 backdrop-blur-md border border-zinc-700 rounded-lg px-6 py-5 shadow-lg transition-all duration-300 ease-in-out flex items-center gap-3 min-w-[280px]
  data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0
  data-[visible=false]:opacity-0 data-[visible=false]:-translate-y-2
  data-[type="info"]:bg-blue-900/50 data-[type="info"]:border-blue-900
  data-[type="error"]:bg-red-900/50 data-[type="error"]:border-red-800/50
  data-[type="success"]:bg-green-800/50 data-[type="success"]:border-green-800/50
  data-[type="warning"]:bg-yellow-950/50 data-[type="warning"]:border-amber-900/50`;
const StyledText = "text-white text-sm flex-1";

const NotificationItem = ({ notification, remove }: NotificationItemProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleRemove = () => {
    setIsVisible(false);
    setTimeout(() => remove(notification.id), 300);
  };

  useEffect(() => {
    const timer = setTimeout(handleRemove, 2700);
    return () => clearTimeout(timer);
  }, [notification.id]);

  return (
    <div
      data-visible={isVisible}
      data-type={notification.type}
      className={StyledNotification}
      onClick={() => remove(notification.id)}
    >
      <Icon type={notification.type} />
      <p className={StyledText}>{notification.message}</p>
    </div>
  );
};

export default NotificationItem;