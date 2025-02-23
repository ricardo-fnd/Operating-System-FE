import { Button } from "src/shared/components/Buttons";

import { EmailsService, useLabels } from "src/services/client";
import { NotificationsService } from "src/services";

const ConfirmEmail = ({ email }: { email: string }) => {
  const getLabel = useLabels();

  const { mutate, isError, isSuccess } = EmailsService.useSendVerifyAccount({
    onSuccess: () =>
      NotificationsService.info(getLabel("user-profile.confirm-email-sent")),
  });

  return (
    <Button
      color="orange"
      disabled={isError || isSuccess}
      onClick={() => mutate({ email })}
    >
      {getLabel("user-profile.confirm-email")}
    </Button>
  );
};

export default ConfirmEmail;
