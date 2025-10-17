"use client";

import NotificationItem from "./Notification";

import type { NotificationsGroupedByPosition, NotificationsProps } from "./types";

const StyledContainer = `fixed z-[9999] pointer-events-none
  data-[position="top-left"]:top-4 data-[position="top-left"]:left-4
  data-[position="top-center"]:top-4 data-[position="top-center"]:left-1/2 data-[position="top-center"]:-translate-x-1/2
  data-[position="top-right"]:top-4 data-[position="top-right"]:right-4
  data-[position="bottom-left"]:bottom-[76px] data-[position="bottom-left"]:left-3
  data-[position="bottom-center"]:bottom-[76px] data-[position="bottom-center"]:left-1/2 data-[position="bottom-center"]:-translate-x-1/2
  data-[position="bottom-right"]:bottom-[76px] data-[position="bottom-right"]:right-3`;
const StyledNotificationsList = "flex flex-col gap-2 pointer-events-auto";

const Notifications = ({ notifications, remove }: NotificationsProps) => {
  const groupedByPosition = notifications.reduce<NotificationsGroupedByPosition>((acc, notification) => {
    const position = notification.position;

    if (!acc[position]) acc[position] = [];
    acc[position].push(notification);
    return acc;
  }, {});

  return (
    <>
      {Object.entries(groupedByPosition).map(([position, notifs]) => (
        <div key={position} data-position={position} className={StyledContainer}>
          <div className={StyledNotificationsList}>
            {notifs.map(notification => (
              <NotificationItem key={notification.id} notification={notification} remove={remove} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Notifications;
