import { toast } from "react-toastify";

import type { ToastContentProps, ToastPosition } from "react-toastify";

type Data = { label: string };

const CustomNotification = ({ data }: ToastContentProps<Data>) => (
  <p>{data.label}</p>
);

const info = (label: string, position: ToastPosition = "top-center") => {
  toast(CustomNotification, {
    data: { label },
    type: "info",
    autoClose: 3000,
    position,
    hideProgressBar: true,
  });
};

const error = (label: string, position: ToastPosition = "top-center") => {
  toast(CustomNotification, {
    data: { label },
    type: "error",
    autoClose: 3000,
    position,
    hideProgressBar: true,
  });
};

const NotificationsService = { info, error };

export default NotificationsService;
