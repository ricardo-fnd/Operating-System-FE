import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { LanguageButton } from "src/shared/components";
import WelcomeBack from "./WelcomeBack";
import LoginForm from "./Forms/LoginForm";
import RegisterForm from "./Forms/RegisterForm";
import ChooseUser from "./ChooseUser";

import { QUERIES_KEYS } from "src/enums";

import type { SetUser, WelcomePage } from "./types";

const StyledContainer =
  "flex items-center justify-center w-screen h-screen bg-gradient-to-t from-slate-900 to-slate-700";
const StyledLanguageContainer = "fixed bottom-8 right-8";

const WelcomePage = ({ user, enter }: Omit<WelcomePage, "language">) => {
  const queryClient = useQueryClient();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const login = () => setShowLogin(true);
  const register = () => setShowRegister(true);

  const back = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const setUser = (user: SetUser) => {
    queryClient.setQueryData([QUERIES_KEYS.user], user);
    enter();
  };

  if (showLogin) return <LoginForm back={back} setUser={setUser} />;
  if (showRegister) return <RegisterForm back={back} setUser={setUser} />;

  if (user) return <WelcomeBack user={user} enter={enter} showLogin={login} />;
  return (
    <ChooseUser setUser={setUser} showRegister={register} showLogin={login} />
  );
};

const Container = ({ language, ...props }: WelcomePage) => (
  <div className={StyledContainer}>
    <WelcomePage {...props} />
    <div className={StyledLanguageContainer}>
      <LanguageButton language={language} />
    </div>
  </div>
);

export default Container;
