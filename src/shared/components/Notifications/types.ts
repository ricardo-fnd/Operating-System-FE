type NotificationType = "info" | "error" | "success" | "warning";
type NotificationPosition = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
type NotificationSize = "default" | "small";

type NotificationsProps = {
  notifications: Notification[];
  remove: (id: string) => void;
};

type NotificationsGroupedByPosition = {
  [key: string]: Notification[];
};

type Notification = {
  id: string;
  message: string;
  type: NotificationType;
  position: NotificationPosition;
  size?: NotificationSize;
};

type NotificationItemProps = {
  notification: Notification;
  remove: (id: string) => void;
};

type IconProps = {
  type: NotificationType;
};

export type { NotificationType, NotificationPosition, NotificationSize, Notification, NotificationItemProps, NotificationsProps, NotificationsGroupedByPosition, IconProps };