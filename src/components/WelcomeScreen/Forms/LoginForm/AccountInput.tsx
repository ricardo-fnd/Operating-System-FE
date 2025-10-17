import { Input, UserIcon } from "src/shared/components";
import Submit from "../Submit";
import ForgotAccount from "./ForgotAccount";

import { useLabels, UsersService } from "src/services/client";

import type { AccountInput } from "../types";

const StyledContainer = "flex flex-col gap-4 w-full";
const StyledDiv = "relative flex w-full [&_input]:pl-9";
const StyledUserIcon = "absolute bottom-[14px] left-1.5";

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
        <UserIcon color="white" className={StyledUserIcon} />
        <Input
          required
          autoFocus
          theme="dark"
          value={account}
          name="account"
          onEnterKey={onClick}
          onChange={setAccount}
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
