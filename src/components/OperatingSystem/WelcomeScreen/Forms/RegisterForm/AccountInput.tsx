import { Input } from "src/shared/components";
import accountIcon from "public/user-login/username.svg";
import Submit from "../Submit";

import { useLabels } from "src/services/client";
import { ValidationService } from "src/services";

import type { AccountInput } from "../types";

const StyledContainer = "relative flex items-end gap-4 w-full";
const StyledInput = "[&_input]:!pr-10";

const AccountInput = ({ account, setAccount, next }: AccountInput) => {
  const getLabel = useLabels();

  return (
    <div className={StyledContainer}>
      <Input
        required
        autoFocus
        theme="dark"
        value={account}
        name="account"
        icon={accountIcon}
        onEnterKey={next}
        onChange={setAccount}
        className={StyledInput}
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
