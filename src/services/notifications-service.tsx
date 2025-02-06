import { toast } from "react-toastify";

import type { ToastContentProps } from "react-toastify";

type Data = { label: string };

const CustomNotification = ({ data }: ToastContentProps<Data>) => (
  <p>{data.label}</p>
);

const error = (label: string) => {
  toast(CustomNotification, {
    data: { label },
    type: "error",
    autoClose: 3000,
    position: "top-center",
    hideProgressBar: true,
  });
};

const NotificationsService = { error };

export default NotificationsService;
