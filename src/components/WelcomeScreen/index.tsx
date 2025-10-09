"use client";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import Header from "./Header";
import WelcomeBack from "./WelcomeBack";
import LoginForm from "./Forms/LoginForm";
import RegisterForm from "./Forms/RegisterForm";
import ChooseUser from "./ChooseUser";
import Footer from "./Footer";

import { QUERIES_KEYS } from "src/enums";

import type { SetUser, WelcomePage } from "./types";

const StyledContainer = "flex flex-col w-screen h-screen bg-black relative";
const StyledContent = "flex-1 flex items-center justify-center";

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

const Container = (props: WelcomePage) => (
  <div className={StyledContainer}>
    <Header />
    <div className={StyledContent}>
      <WelcomePage {...props} />
    </div>
    <Footer />
  </div>
);

export default Container;
