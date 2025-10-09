import { Input } from "src/shared/components";
import accountIcon from "public/user-login/username.svg";
import Submit from "../Submit";
import ForgotAccount from "./ForgotAccount";

import { useLabels, UsersService } from "src/services/client";

import type { AccountInput } from "../types";

const StyledContainer = "flex flex-col gap-4 w-full";
const StyledDiv = "relative flex w-full";
const StyledInput = "[&_input]:!pr-10";

const AccountInput = ({ next, account, setAccount }: AccountInput) => {
  const getLabel = useLabels();

  const { mutate, isPending } = UsersService.useAccount({
    onSuccess: next,
  });

  const onClick = () => {
    if (account) mutate({ params: { account } });
  };

  return (
    <div className={StyledContainer}>
      <div className={StyledDiv}>
        <Input
          required
          autoFocus
          theme="dark"
          value={account}
          name="account"
          icon={accountIcon}
          onEnterKey={onClick}
          onChange={setAccount}
          className={StyledInput}
          style={{ "--autofill-text-color": "#e2e8f0" }}
          label={getLabel("user-login.account")}
          placeholder={getLabel("user-login.account")}
        />
        <Submit onClick={onClick} disabled={!account} loading={isPending} />
      </div>
      <ForgotAccount label="user-login.forgot-username" />
    </div>
  );
};

export default AccountInput;
