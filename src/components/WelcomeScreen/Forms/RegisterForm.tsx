import Image from "next/image";
import { useState } from "react";

import Back from "./Back";
import registerSvg from "public/user-login/register.svg";
import { Input } from "src/shared/components";
import Validations from "./Validations";
import SubmitButton from "./Submit";

import { useLabels, UsersService } from "src/services/client";
import { useSearchParams } from "src/hooks";

import type { Form } from "../types";

const StyledForm =
  "relative flex flex-col items-center gap-4 w-full max-w-80 pt-10 -mt-44";
const StyledInputs = "flex flex-col gap-3 w-full [&>:last-child]:ml-0.5";

const LoginForm = ({ setUser, back }: Form) => {
  const getLabel = useLabels();
  const { setSearchParam } = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { mutate, isPending } = UsersService.useCreate({
    onSuccess: (user) => {
      setSearchParam({ name: "welcome", value: "true" });
      setUser(user);
    },
  });

  const create = () => mutate({ username, password });

  const disabled =
    !username || !(password && confirmPassword && password === confirmPassword);

  return (
    <div className={StyledForm}>
      <Back onClick={back} />
      <Image src={registerSvg} width={160} height={160} alt="default-login" />
      <div className={StyledInputs}>
        <Input
          required
          name="username"
          value={username}
          autoComplete="off"
          onChange={setUsername}
          placeholder={getLabel("commons.username-placeholder")}
        />
        <Input
          required
          name="password"
          type="password"
          value={password}
          onEnterKey={create}
          onChange={setPassword}
          placeholder={getLabel("commons.password-placeholder")}
        />
        <Input
          required
          type="password"
          name="confirm-password"
          onEnterKey={create}
          value={confirmPassword}
          onChange={setConfirmPassword}
          placeholder={getLabel("commons.confirm-password-placeholder")}
        />
      </div>
      <Validations
        username={username}
        password={password}
        confirmPassword={confirmPassword}
      />
      <SubmitButton
        onClick={create}
        disabled={disabled}
        loading={isPending}
        label="user-login.register.cta"
      />
    </div>
  );
};

export default LoginForm;
