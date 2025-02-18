"use client";
import { useState } from "react";

import WelcomeScreen from "./WelcomeScreen";
import SearchBar from "./SearchBar";
import AppsMenu from "./AppsMenu";
import Desktop from "./Desktop";
import Dock from "./Dock";
import WelcomeBanner from "./WelcomeBanner";

import type { SUPPORTED_LANGUAGES } from "src/enums";
import type { User } from "src/types";

type Props = { user: User | null; language: SUPPORTED_LANGUAGES };

const OperatingSystem = ({ user, language }: Props) => {
  const [welcome, setWelcome] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);

  if (welcome) {
    return (
      <WelcomeScreen
        user={user}
        language={language}
        enter={() => setWelcome(false)}
      />
    );
  }

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <SearchBar />
      {isMenuOpen && <AppsMenu closeMenu={closeMenu} />}
      <Desktop />
      <Dock
        language={language}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
      />
      <WelcomeBanner />
    </>
  );
};

export default OperatingSystem;
