"use client";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";

import { Button } from "src/shared/components/Buttons";

import { useLabels } from "src/services/client";

import type { User } from "src/types";
import { useEffect } from "react";

const StyledContainer =
  "flex flex-col items-center gap-14 w-full max-w-md text-slate-200";
const StyledDiv =
  "flex flex-col gap-4 text-center [&_h1]:text-4xl [&_h1]:font-medium [&_h1]:text-white";
const StyledButton =
  "px-10 border !bg-transparent !text-white transition-scale duration-300 hover:scale-105";

const VerifyEmail = ({ user }: { user: User }) => {
  const router = useRouter();
  const getLabel = useLabels();

  useEffect(() => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  }, []);

  const onClick = () => router.push("/");

  const name =
    user.name ?? user.username ?? (user.email?.split("@")[0] as string);

  return (
    <div className={StyledContainer}>
      <div className={StyledDiv}>
        <h1>{getLabel("verify-email.title", { name })}</h1>
        <p>{getLabel("verify-email.description")}</p>
      </div>
      <Button className={StyledButton} onClick={onClick}>
        <p>{getLabel("commons.enter")}</p>
      </Button>
    </div>
  );
};

export default VerifyEmail;
