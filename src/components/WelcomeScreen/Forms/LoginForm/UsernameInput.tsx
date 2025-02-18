import { Input } from "src/shared/components";
import usernameIcon from "public/user-login/username.svg";
import Submit from "../Submit";

import { useLabels, UsersService } from "src/services/client";

import type { UsernameInput } from "../types";

const StyledContainer = "relative flex w-full";
const StyledInput =
  "[&_label]:text-slate-200 [&_input]:text-slate-200 [&_input]:!pr-10";

const UsernameInput = ({ next, username, setUsername }: UsernameInput) => {
  const getLabel = useLabels();

  const { mutate, isPending } = UsersService.useAccount({
    onSuccess: next,
  });

  const onClick = () => {
    if (username) mutate({ params: { account: username } });
  };

  return (
    <div className={StyledContainer}>
      <Input
        required
        autoFocus
        value={username}
        name="username"
        icon={usernameIcon}
        onEnterKey={onClick}
        onChange={setUsername}
        className={StyledInput}
        label={getLabel("user-login.username-email")}
        placeholder={getLabel("user-login.username-email-placeholder")}
      />
      <Submit onClick={onClick} disabled={!username} loading={isPending} />
    </div>
  );
};

export default UsernameInput;
