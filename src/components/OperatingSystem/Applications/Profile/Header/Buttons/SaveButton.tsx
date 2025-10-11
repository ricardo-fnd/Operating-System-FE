import { useQueryClient } from "@tanstack/react-query";

import { Button, SaveIcon } from "src/shared/components";

import { useLabels, UsersService } from "src/services/client";
import { QUERIES_KEYS } from "src/enums";
import { NotificationsService } from "src/services";

import type { SaveButton } from "../../types";

const StyledButton = "absolute bottom-4 right-14 p-1.5 rounded-xl";

const SaveButton = ({ editing, stopEdit, body, setBody, user, ...props }: SaveButton) => {
  const getLabel = useLabels();
  const queryClient = useQueryClient();

  const { mutate, isPending } = UsersService.useUpdate({
    onSuccess: (user) => {
      stopEdit();
      setBody({});
      queryClient.setQueryData([QUERIES_KEYS.user], user);
      NotificationsService.info(getLabel("user-profile.edit-success"));
    },
  });

  if (!editing) return null;

  const save = () => {
    if (!Object.keys(body).length) return stopEdit();
    if (body.password !== body.passwordConfirmation) {
      return NotificationsService.error(getLabel("commons.password-mismatch"));
    }
    mutate({ id: user.id, body });
  };

  return (
      <Button
        id="save-btn"
        color="blue"
        onClick={save}
        loading={isPending}
        className={StyledButton}
        {...props}
      >
        <SaveIcon color="white" />
      </Button>
  );
};

export default SaveButton;
