import { useState } from "react";

import { Input } from "src/shared/components";
import lockIcon from "public/user-login/lock.svg";
import CreateAccount from "./CreateAccount";

import { useSearchParams } from "src/hooks";
import { useLabels, UsersService } from "src/services/client";
import { NotificationsService, ValidationService } from "src/services";

import type { PasswordInput } from "../types";

const StyledContainer = "flex flex-col items-center gap-6 w-full";
const StyledInput =
  "[&_label]:text-slate-200 [&_input]:text-slate-200 text-slate-200 [&_input]:!pr-10";

const PasswordInput = ({ account, setUser }: PasswordInput) => {
  const getLabel = useLabels();
  const { setSearchParam } = useSearchParams();
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const { mutate, isPending } = UsersService.useCreate({
    onSuccess: (user) => {
      setUser(user);
      setSearchParam({ name: "welcome", value: "true" });
    },
  });

  const login = () => {
    if (account && password && password === passwordConfirmation) {
      return mutate({ account, password });
    }
    return NotificationsService.error(getLabel("commons.password-mismatch"));
  };

  const onPasswordChange = (password: string) => {
    setPassword(password);
    setPasswordConfirmation("");
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
        onChange={onPasswordChange}
        tooltipLabel="commons.password-tooltip"
        label={getLabel("commons.password")}
        placeholder={getLabel("commons.password-placeholder")}
        validations={[(value) => ValidationService.checkLength(5, value)]}
      />
      <Input
        required
        name="confirm-password"
        type="password"
        value={passwordConfirmation}
        icon={lockIcon}
        className={StyledInput}
        onEnterKey={login}
        onChange={setPasswordConfirmation}
        label={getLabel("commons.confirm-password")}
        placeholder={getLabel("commons.confirm-password-placeholder")}
        validations={[(value) => !!value && password === value]}
      />
      <CreateAccount
        onClick={login}
        loading={isPending}
        disabled={password.length < 5 || password !== passwordConfirmation}
      />
    </div>
  );
};

export default PasswordInput;
