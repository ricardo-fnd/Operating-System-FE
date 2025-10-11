import { Button } from "src/shared/components";

import { EmailsService, useLabels } from "src/services/client";
import { NotificationsService } from "src/services";

import type { User } from "src/types";

type Props = { user: User; onAddEmail: () => void };

const ConfirmEmail = ({ user, onAddEmail }: Props) => {
  const getLabel = useLabels();

  const { mutate, isError, isSuccess } = EmailsService.useSendVerifyAccount({
    onSuccess: () =>
      NotificationsService.info(getLabel("user-profile.confirm-email-sent")),
  });

  if (user.guest || user.emailConfirmed) return null;

  const onClick = () => {
    if(!user.email) return onAddEmail();
    mutate({ email: user.email });
  };

  return (
    <Button
      color="orange"
      disabled={isError || isSuccess}
      onClick={onClick}
    >
      {getLabel("user-profile.confirm-email")}
    </Button>
  );
};

export default ConfirmEmail;
