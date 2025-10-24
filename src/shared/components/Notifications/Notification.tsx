import { useEffect, useState } from "react";

import Icon from "./Icon";

import type { NotificationItemProps } from "./types";

const StyledNotification = `flex items-center gap-3 px-6 py-5 min-w-[280px] bg-zinc-900/95 backdrop-blur-md border border-zinc-700 rounded-lg shadow-lg transition-all duration-300 ease-in-out
  data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0
  data-[visible=false]:opacity-0 data-[visible=false]:-translate-y-2
  data-[type="info"]:bg-blue-900/50 data-[type="info"]:border-blue-900
  data-[type="error"]:bg-red-900/50 data-[type="error"]:border-red-800/50
  data-[type="success"]:bg-green-800/50 data-[type="success"]:border-green-800/50
  data-[type="warning"]:bg-yellow-950/50 data-[type="warning"]:border-amber-900/50
  data-[size="small"]:gap-2 data-[size="small"]:min-w-fit data-[size="small"]:px-3 data-[size="small"]:py-2`;
const StyledText = "text-white flex-1 data-[size='default']:text-sm data-[size='small']:text-xs";

const NotificationItem = ({ notification, remove }: NotificationItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { id, type, message, size = "default" } = notification;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleRemove = () => {
    setIsVisible(false);
    setTimeout(() => remove(id), 300);
  };

  useEffect(() => {
    const timer = setTimeout(handleRemove, 2700);
    return () => clearTimeout(timer);
  }, [id]);

  return (
    <div
      data-visible={isVisible}
      data-type={type}
      data-size={size}
      className={StyledNotification}
      onClick={() => remove(id)}
    >
      <Icon type={type} />
      <p data-size={size} className={StyledText}>{message}</p>
    </div>
  );
};

export default NotificationItem;