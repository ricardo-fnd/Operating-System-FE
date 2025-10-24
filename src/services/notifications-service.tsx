"use client";
import { useEffect, useState, useCallback } from "react";

import { Notifications } from "src/shared/components";

import type { Notification } from "src/shared/components/Notifications/types";

let showNotification: ((args: Omit<Notification, "id">) => void) | null = null;
const setNotificationHandler = (fn: (args: Omit<Notification, "id">) => void) => {
  showNotification = fn;
};

const NotificationsProvider = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const showNotification = useCallback((args: Omit<Notification, "id">) => {
    const id = Date.now().toString();
    const notification: Notification = { id, ...args };
    
    setNotifications(prev => {
      const byPosition = prev.filter(n => n.position === notification.position);
     
      if (byPosition.length >= 3) {
        const oldestNotification = byPosition.reduce((oldest, current) => 
          parseInt(current.id) < parseInt(oldest.id) ? current : oldest
        );
        return [...prev.filter(n => n.id !== oldestNotification.id), notification];
      }
      
      return [...prev, notification];
    });
    
    setTimeout(() => setNotifications(prev => prev.filter(n => n.id !== id)), 3000);
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  useEffect(() => setNotificationHandler(showNotification), [showNotification]);

  return <Notifications notifications={notifications} remove={removeNotification} />
};

const info = (message: string, position: Notification['position'] = "top-center") => {
  showNotification?.({ message, type: "info", position });
};

const error = (message: string, position: Notification['position'] = "top-center") => {
  showNotification?.({ message, type: "error", position });
};

const success = (message: string, position: Notification['position'] = "top-center") => {
  showNotification?.({ message, type: "success", position });
};

const warning = (message: string, position: Notification['position'] = "top-center") => {
  showNotification?.({ message, type: "warning", position });
};

const online = (message: string) => {
  showNotification?.({ message, type: "success", position: "top-right", size: "small" });
};

const offline = (message: string) => {
  showNotification?.({ message, type: "info", position: "top-right", size: "small" });
};

const NotificationsService = { info, error, success, warning, online, offline };

export { NotificationsProvider };
export default NotificationsService;
