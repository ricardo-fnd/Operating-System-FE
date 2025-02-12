import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import ChooseUser from "./ChooseUser";
import LoginForm from "./Forms/LoginForm";
import RegisterForm from "./Forms/RegisterForm";
import RegisterTip from "./RegisterTip";
import { LanguageButton } from "src/shared/components";

import { QUERIES_KEYS } from "src/enums";

import type { WelcomeScreen, SetUser } from "./types";

const StyledContainer =
  "flex flex-col items-center justify-center gap-44 w-full h-full bg-gradient-to-r from-blue-200 to-cyan-200";
const StyledLanguageButton = "fixed right-4 bottom-4 border border-blue-400";

const WelcomeScreen = ({ language }: WelcomeScreen) => {
  const queryClient = useQueryClient();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const back = () => {
    setShowLoginForm(false);
    setShowRegisterForm(false);
  };

  const register = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
  };

  const setUser = (user: SetUser) => {
    queryClient.setQueryData([QUERIES_KEYS.user], user);
  };

  const chooseUser = !showLoginForm && !showRegisterForm;

  return (
    <>
      <div className={StyledContainer}>
        {chooseUser && (
          <ChooseUser setUser={setUser} setShowLoginForm={setShowLoginForm} />
        )}
        {showLoginForm && <LoginForm setUser={setUser} back={back} />}
        {showRegisterForm && <RegisterForm setUser={setUser} back={back} />}
        {!showRegisterForm && <RegisterTip onClick={register} />}
      </div>
      <LanguageButton className={StyledLanguageButton} language={language} />
    </>
  );
};

export default WelcomeScreen;
