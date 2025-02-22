import { useState } from "react";

import { Input, Modal } from "src/shared/components";
import emailIcon from "public/email.svg";
import { Button } from "src/shared/components/Buttons";

import { NotificationsService, ValidationService } from "src/services";
import { EmailsService, useLabels } from "src/services/client";

const StyledModal = "[&_section]:gap-10";
const StyledDiv = "flex flex-col gap-4";
const StyledTip = "text-gray-700 text-sm -mt-9";
const StyledButton = "self-end px-8";

const ForgotAccountModal = ({ close }: { close: () => void }) => {
  const getLabel = useLabels();
  const [email, setEmail] = useState("");

  const { mutate } = EmailsService.useSendForgotAccount({
    onSuccess: () => {
      close();
      NotificationsService.info(getLabel("forgot-account-modal.sent"));
    },
  });

  const send = () => {
    if (!ValidationService.isEmail(email)) {
      return NotificationsService.error(getLabel("commons.wrong-email-format"));
    }
    mutate({ email });
  };

  return (
    <Modal className={StyledModal} close={close}>
      <div className={StyledDiv}>
        <h2>{getLabel("forgot-account-modal.title")}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: getLabel("forgot-account-modal.description"),
          }}
        />
      </div>
      <Input
        autoFocus
        required
        value={email}
        icon={emailIcon}
        onEnterKey={send}
        onChange={setEmail}
        name="forgot-account"
        label={getLabel("commons.email")}
        placeholder={getLabel("commons.email-placeholder")}
      />
      <p className={StyledTip}>{getLabel("forgot-account-modal.tip")}</p>
      <Button className={StyledButton} onClick={send} disabled={!email}>
        {getLabel("forgot-account-modal.send")}
      </Button>
    </Modal>
  );
};

export default ForgotAccountModal;
