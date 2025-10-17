import { Input, UserIcon } from "src/shared/components";
import Submit from "../Submit";

import { useLabels } from "src/services/client";
import { ValidationService } from "src/services";

import type { AccountInput } from "../types";

const StyledContainer = "relative flex items-end gap-4 w-full [&_input]:pl-9";
const StyledUserIcon = "absolute bottom-[14px] left-1.5";

const AccountInput = ({ account, setAccount, next }: AccountInput) => {
  const getLabel = useLabels();

  return (
    <div className={StyledContainer}>
      <UserIcon color="white" className={StyledUserIcon} />
      <Input
        required
        autoFocus
        theme="dark"
        value={account}
        name="account"
        onEnterKey={next}
        onChange={setAccount}
        tooltipLabel="user-login.email-tooltip"
        label={getLabel("user-login.account")}
        style={{ "--autofill-text-color": "#e2e8f0" }}
        placeholder={getLabel("user-login.account-placeholder")}
        validations={[(value) => ValidationService.checkLength(4, value)]}
      />
      <Submit onClick={next} disabled={account.length <= 3} />
    </div>
  );
};

export default AccountInput;
