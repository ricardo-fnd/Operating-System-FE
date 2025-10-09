import { useState } from "react";
import Image from "next/image";

import Back from "../Back";
import defaultAvatar from "public/user-login/user.svg";
import Account from "./AccountInput";
import Password from "./PasswordInput";

import type { LoginForm } from "../types";

const StyledForm =
  "relative flex flex-col gap-6 items-center w-full max-w-md p-10 py-24 rounded-lg data-[account-step=true]:-mt-[88px] data-[account-step=false]:mt-[2px]";
const StyledDiv = "flex flex-col items-center gap-6 w-full";

const LoginForm = ({ setUser, back }: LoginForm) => {
  const [step, setStep] = useState(1);
  const [account, setAccount] = useState("");

  return (
    <div className={StyledForm} data-account-step={step === 1}>
      <Back onClick={step === 2 ? () => setStep(1) : back} />
      <div className={StyledDiv}>
        <Image src={defaultAvatar} width={180} height={180} alt="avatar" />
        {step === 1 ? (
          <Account
            account={account}
            setAccount={setAccount}
            next={() => setStep(2)}
          />
        ) : (
          <Password account={account} setUser={setUser} />
        )}
      </div>
    </div>
  );
};

export default LoginForm;
