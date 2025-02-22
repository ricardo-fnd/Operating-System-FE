"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Inputs from "./Inputs";
import Submit from "./Submit";

import { useSearchParams } from "src/hooks";
import { useLabels, UsersService } from "src/services/client";
import { NotificationsService } from "src/services";

const StyledContainer =
  "flex flex-col items-center gap-14 w-full max-w-md text-slate-200";
const StyledDiv =
  "flex flex-col gap-4 [&_h1]:text-center [&_h1]:text-4xl [&_h1]:font-medium [&_h1]:text-white";

const ResetPassword = () => {
  const router = useRouter();
  const getLabel = useLabels();
  const { getSearchParam } = useSearchParams();
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const { mutate, isPending } = UsersService.useUpdatePassword({
    onSuccess: () => {
      NotificationsService.info(getLabel("reset-password.success"));
      router.push("/");
    },
  });

  const submit = () => {
    if (password.length >= 5 && password === passwordConfirmation) {
      const body = { password, passwordConfirmation };
      return mutate({ token: getSearchParam("token") as string, body });
    }
    return NotificationsService.error(getLabel("commons.password-mismatch"));
  };

  return (
    <div className={StyledContainer}>
      <div className={StyledDiv}>
        <h1>{getLabel("reset-password.title")}</h1>
        <p>{getLabel("reset-password.description")}</p>
      </div>
      <Inputs
        submit={submit}
        password={password}
        passwordConfirmation={passwordConfirmation}
        setPassword={setPassword}
        setPasswordConfirmation={setPasswordConfirmation}
      />
      <Submit
        onClick={submit}
        loading={isPending}
        disabled={password.length < 5 || password !== passwordConfirmation}
      />
    </div>
  );
};

export default ResetPassword;
