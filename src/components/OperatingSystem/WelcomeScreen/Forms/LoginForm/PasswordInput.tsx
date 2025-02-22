import { useState } from "react";

import { Input } from "src/shared/components";
import lockIcon from "public/user-login/lock.svg";
import ForgotPassword from "./ForgotAccount";
import Enter from "./Enter";

import { AuthService, useLabels } from "src/services/client";

import type { PasswordInput } from "../types";

const StyledContainer = "flex flex-col gap-2 items-center w-full";
const StyledInput =
  "[&_label]:text-slate-200 [&_input]:text-slate-200 [&_input]:!pr-10";

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
      <ForgotPassword label="user-login.forgot-password" />
      <Enter onClick={login} loading={isPending} />
    </div>
  );
};

export default PasswordInput;
