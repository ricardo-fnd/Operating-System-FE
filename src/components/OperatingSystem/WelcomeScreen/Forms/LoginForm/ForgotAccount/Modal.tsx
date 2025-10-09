import { useState } from "react";

import { Input, Modal } from "src/shared/components";
import emailIcon from "public/email.svg";
import { Button } from "src/shared/components/Buttons";

import { NotificationsService, ValidationService } from "src/services";
import { EmailsService, useLabels } from "src/services/client";

const StyledModal = "[&_section]:gap-8 [&_section]:p-10";
const StyledHeader = "flex flex-col gap-3";
const StyledTitle = "text-2xl font-semibold";
const StyledDescription = " text-sm leading-relaxed";
const StyledInputWrapper = "flex flex-col gap-2";
const StyledTip = " text-xs";
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
    <Modal className={StyledModal} close={close} theme="dark">
      <div className={StyledHeader}>
        <h2 className={StyledTitle}>{getLabel("forgot-account-modal.title")}</h2>
        <p
          className={StyledDescription}
          dangerouslySetInnerHTML={{
            __html: getLabel("forgot-account-modal.description"),
          }}
        />
      </div>
      <div className={StyledInputWrapper}>
        <Input
          autoFocus
          required
          value={email}
          theme="dark"
          icon={emailIcon}
          onEnterKey={send}
          onChange={setEmail}
          name="forgot-account"
          label={getLabel("commons.email")}
          placeholder={getLabel("commons.email-placeholder")}
        />
        <p className={StyledTip}>{getLabel("forgot-account-modal.tip")}</p>
      </div>
      <Button className={StyledButton} onClick={send} disabled={!email} color="blue">
        {getLabel("forgot-account-modal.send")}
      </Button>
    </Modal>
  );
};

export default ForgotAccountModal;
