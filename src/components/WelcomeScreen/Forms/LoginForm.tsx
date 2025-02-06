import Image from "next/image";
import { useState } from "react";

import Back from "./Back";
import loginSvg from "public/user-login/login.svg";
import { Input } from "src/shared/components";
import SubmitButton from "./Submit";

import { AuthService, useLabels } from "src/services/client";

import type { Form } from "../types";

const StyledForm =
  "relative flex flex-col items-center gap-4 w-full max-w-80 pt-10";
const StyledInputs = "flex flex-col gap-3 w-full [&>:last-child]:ml-0.5";
const StyledInput =
  "border-black-400 focus:border-black-500 focus:ring-black-500";

const LoginForm = ({ setUser, back }: Form) => {
  const getLabel = useLabels();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [saveLogin, setSaveLogin] = useState(false);

  const { mutate, isPending } = AuthService.useAuth({
    onSuccess: setUser,
  });

  const login = () => mutate({ username, password });

  return (
    <div className={StyledForm}>
      <Back onClick={back} />
      <Image src={loginSvg} width={160} height={160} alt="default-login" />
      <div className={StyledInputs}>
        <Input
          required
          name="username"
          value={username}
          autoComplete="off"
          onChange={setUsername}
          inputClassName={StyledInput}
          placeholder={getLabel("commons.username-placeholder")}
        />
        <Input
          required
          name="password"
          type="password"
          value={password}
          onEnterKey={login}
          onChange={setPassword}
          inputClassName={StyledInput}
          placeholder={getLabel("commons.password-placeholder")}
        />
        <Input
          type="checkbox"
          name="save-login"
          checked={saveLogin}
          onChange={() => setSaveLogin(!saveLogin)}
          label={getLabel("user-login.login.save")}
        />
      </div>
      <SubmitButton
        onClick={login}
        label="commons.enter"
        disabled={!username || !password}
        loading={isPending}
      />
    </div>
  );
};

export default LoginForm;
