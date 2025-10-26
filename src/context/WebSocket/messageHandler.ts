import { NotificationsService } from "src/services";

import type { WebSocketMessage, User } from "src/types";
import type { WebSocketContextProps } from "../types";

type MessageHandlerParams = {
  message: WebSocketMessage;
  currentUser: User;
  getLabel: (key: string, params?: Record<string, any>) => string;
  addMessage: WebSocketContextProps['addMessage'];
};

export const handleWebSocketMessage = ({
  message,
  currentUser,
  getLabel,
  addMessage,
}: MessageHandlerParams) => {
  switch (message.type) {
    case "user_online":
      if (message.user && message.user.id !== currentUser.id) {
        NotificationsService.online(getLabel("online-users.online-toast", { name: message.user.name }));
      }
      break;
    case "user_offline":
      if (message.user && message.user.id !== currentUser.id) {
        NotificationsService.offline(getLabel("online-users.offline-toast", { name: message.user.name }));
      }
      break;
    case "chat_message_received":
      if (message.data) addMessage(message.data)
  }
};
