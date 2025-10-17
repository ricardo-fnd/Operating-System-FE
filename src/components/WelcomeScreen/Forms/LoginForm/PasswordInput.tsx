import { useState } from "react";

import { Input, LockIcon } from "src/shared/components";
import ForgotAccount from "./ForgotAccount";
import Enter from "./Enter";

import { AuthService, useLabels } from "src/services/client";

import type { PasswordInput } from "../types";

const StyledContainer = "flex flex-col gap-4 items-center w-full";
const StyledInputWrapper = "relative w-full [&_input]:pl-8";
const StyledLockIcon = "absolute bottom-[14px] left-1";

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
      <div className={StyledInputWrapper}>
        <LockIcon color="white" className={StyledLockIcon} />
        <Input
          required
          autoFocus
          theme="dark"
          name="password"
          type="password"
          value={password}
          onEnterKey={login}
          onChange={setPassword}
          label={getLabel("commons.password")}
          placeholder={getLabel("commons.password-placeholder")}
        />
      </div>
      <ForgotAccount label="user-login.forgot-password" />
      <Enter disabled={!password} onClick={login} loading={isPending} />
    </div>
  );
};

export default PasswordInput;
