"use client";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";

import { Button } from "src/shared/components/Buttons";

import { useLabels } from "src/services/client";

import type { User } from "src/types";
import { useEffect } from "react";

const StyledContainer =
  "flex flex-col items-center gap-10 w-full max-w-lg bg-zinc-900 border border-zinc-600 rounded-2xl p-10 shadow-2xl";
const StyledHeader = "flex flex-col gap-3 w-full text-center";
const StyledTitle = "text-white text-3xl font-semibold";
const StyledDescription = "text-slate-200 leading-relaxed";
const StyledButton =
  "px-10 transition-scale duration-300 hover:scale-105";

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
    <section className={StyledContainer}>
      <div className={StyledHeader}>
        <h1 className={StyledTitle}>{getLabel("verify-email.title", { name })}</h1>
        <p className={StyledDescription}>{getLabel("verify-email.description")}</p>
      </div>
      <Button className={StyledButton} onClick={onClick}>
        <p>{getLabel("commons.enter")}</p>
      </Button>
    </section>
  );
};

export default VerifyEmail;
