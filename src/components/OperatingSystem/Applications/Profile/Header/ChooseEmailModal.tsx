import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { Modal, Input, Button } from "src/shared/components";

import { UsersService, useLabels } from "src/services/client";
import { NotificationsService, ValidationService } from "src/services";
import { QUERIES_KEYS } from "src/enums";

import type { User } from "src/types";

type ChooseEmailModalProps = { close: () => void; user: User; };

const ChooseEmailModal = ({ close, user }: ChooseEmailModalProps) => {
  const getLabel = useLabels();
  const queryClient = useQueryClient();
  const [email, setEmail] = useState("");

  const { mutate, isPending } = UsersService.useUpdate({
    onSuccess: (updatedUser) => {
      queryClient.setQueryData([QUERIES_KEYS.user], updatedUser);
      NotificationsService.info(getLabel("user-profile.email-updated"));
      close();
    },
  });

  const handleSubmit = () => mutate({ id: user.id, body: { email } });

  const isValidEmail = (email: string) => ValidationService.isEmail(email);

  return (
    <Modal close={close} theme="light">
      <h2>{getLabel("user-profile.choose-email-title")}</h2>
      <p>{getLabel("user-profile.choose-email-description")}</p>
      <Input
        type="email"
        name="email"
        value={email}
        onChange={setEmail}
        onEnterKey={handleSubmit}
        validations={[isValidEmail]}
        label={getLabel("user-profile.email-label")}
        placeholder={getLabel("user-profile.email-placeholder")}
      />
      <Button
        color="blue"
        onClick={handleSubmit}
        disabled={isPending || !isValidEmail(email)}
      >
        {isPending
          ? getLabel("user-profile.submitting")
          : getLabel("user-profile.submit-email")}
      </Button>
    </Modal>
  );
};

export default ChooseEmailModal;

