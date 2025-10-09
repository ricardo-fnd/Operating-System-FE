"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Inputs from "./Inputs";
import Submit from "./Submit";

import { useSearchParams } from "src/hooks";
import { useLabels, UsersService } from "src/services/client";
import { NotificationsService } from "src/services";

const StyledContainer =
  "flex flex-col items-center gap-10 w-full max-w-lg bg-zinc-900 border border-zinc-600 rounded-2xl p-10 shadow-2xl";
const StyledHeader = "flex flex-col gap-3 w-full text-center";
const StyledTitle = "text-white text-3xl font-semibold";
const StyledDescription = "text-slate-200 text-sm leading-relaxed";

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
    <section className={StyledContainer}>
      <div className={StyledHeader}>
        <h1 className={StyledTitle}>{getLabel("reset-password.title")}</h1>
        <p className={StyledDescription}>{getLabel("reset-password.description")}</p>
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
    </section>
  );
};

export default ResetPassword;
