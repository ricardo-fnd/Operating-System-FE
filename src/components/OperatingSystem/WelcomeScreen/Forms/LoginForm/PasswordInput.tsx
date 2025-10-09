import { useState } from "react";

import { Input } from "src/shared/components";
import lockIcon from "public/user-login/lock.svg";
import ForgotAccount from "./ForgotAccount";
import Enter from "./Enter";

import { AuthService, useLabels } from "src/services/client";

import type { PasswordInput } from "../types";

const StyledContainer = "flex flex-col gap-4 items-center w-full";
const StyledInput = "[&_input]:!pr-10";

const PasswordInput = ({ account, setUser }: PasswordInput) => {
  const getLabel = useLabels();
  const [password, setPassword] = useState("");

  const { mutate, isPending } = AuthService.useAuth({
    onSuccess: setUser,
  });

  const login = () => {
    if (account && password) mutate({ account, password });
  };

  return (
    <div className={StyledContainer}>
      <Input
        required
        autoFocus
        theme="dark"
        name="password"
        type="password"
        value={password}
        icon={lockIcon}
        className={StyledInput}
        onEnterKey={login}
        onChange={setPassword}
        label={getLabel("commons.password")}
        placeholder={getLabel("commons.password-placeholder")}
      />
      <ForgotAccount label="user-login.forgot-password" />
      <Enter disabled={!password} onClick={login} loading={isPending} />
    </div>
  );
};

export default PasswordInput;
