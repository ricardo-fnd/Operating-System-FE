import { useState } from "react";

import { Input, LockIcon } from "src/shared/components";
import CreateAccount from "./CreateAccount";

import { useSearchParams } from "src/hooks";
import { useLabels, UsersService } from "src/services/client";
import { NotificationsService, ValidationService } from "src/services";

import type { PasswordInput } from "../types";

const StyledContainer = "flex flex-col items-center gap-6 w-full";
const StyledInputWrapper = "relative w-full [&_input]:pl-8";
const StyledLockIcon = "absolute bottom-[14px] left-1";

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
          tooltipLabel="commons.password-tooltip"
          label={getLabel("commons.password")}
          placeholder={getLabel("commons.password-placeholder")}
          validations={[(value) => ValidationService.checkLength(5, value)]}
        />
      </div>
      <div className={StyledInputWrapper}>
        <LockIcon color="white" className={StyledLockIcon} />
        <Input
          required
          theme="dark"
          type="password"
          name="confirm-password"
          value={passwordConfirmation}
          onEnterKey={login}
          onChange={setPasswordConfirmation}
          label={getLabel("commons.confirm-password")}
          placeholder={getLabel("commons.confirm-password-placeholder")}
          validations={[(value) => !!value && password === value]}
        />
      </div>
      <CreateAccount
        onClick={login}
        loading={isPending}
        disabled={password.length < 5 || password !== passwordConfirmation}
      />
    </div>
  );
};

export default PasswordInput;
