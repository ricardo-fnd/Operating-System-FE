import { useState } from "react";
import Image from "next/image";

import Back from "../Back";
import defaultAvatar from "public/user-login/user.svg";
import Username from "./UsernameInput";
import Password from "./PasswordInput";

import type { LoginForm } from "../types";

const StyledForm =
  "relative flex flex-col gap-6 items-center w-full max-w-md p-10 py-24 rounded-lg data-[username-step=true]:-mt-[114px]";
const StyledDiv = "flex flex-col items-center w-full";

const LoginForm = ({ setUser, back }: LoginForm) => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");

  return (
    <div className={StyledForm} data-username-step={step === 1}>
      <Back onClick={step === 2 ? () => setStep(1) : back} />
      <div className={StyledDiv}>
        <Image src={defaultAvatar} width={180} height={180} alt="avatar" />
        {step === 1 ? (
          <Username
            next={() => setStep(2)}
            username={username}
            setUsername={setUsername}
          />
        ) : (
          <Password username={username} setUser={setUser} />
        )}
      </div>
    </div>
  );
};

export default LoginForm;
