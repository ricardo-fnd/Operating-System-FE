import Image from "next/image";
import { useState } from "react";

import Back from "../Back";
import registerSvg from "public/user-login/register.svg";
import Username from "./UsernameInput";
import Passwords from "./PasswordsInput";

import type { RegisterForm } from "../types";

const StyledForm =
  "relative flex flex-col gap-6 items-center w-full max-w-md p-10 py-24 rounded-lg data-[username-step=true]:-mt-[136px]";
const StyledDiv = "flex flex-col gap-1 items-center w-full";

const RegisterForm = ({ setUser, back }: RegisterForm) => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");

  const next = () => {
    if (username.length > 3) setStep(2);
  };

  return (
    <div className={StyledForm} data-username-step={step === 1}>
      <Back onClick={step === 2 ? () => setStep(1) : back} />
      <div className={StyledDiv}>
        <Image src={registerSvg} width={180} height={180} alt="default-login" />
        {step === 1 ? (
          <Username next={next} username={username} setUsername={setUsername} />
        ) : (
          <Passwords username={username} setUser={setUser} />
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
