"use client";
import { useState } from "react";

import WelcomeScreen from "./WelcomeScreen";
import SearchBar from "./SearchBar";
import AppsMenu from "./AppsMenu";
import Desktop from "./Desktop";
import Dock from "./Dock";

import { UsersService } from "src/services/client";

import type { SUPPORTED_LANGUAGES } from "src/enums";
import type { User } from "src/types";

type Props = { user: User | null; language: SUPPORTED_LANGUAGES };

const OperatingSystem = ({ user: initialData, language }: Props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const { data: user } = UsersService.useMe({ initialData });
  if (!user) return <WelcomeScreen language={language} />;

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
    </>
  );
};

export default OperatingSystem;
