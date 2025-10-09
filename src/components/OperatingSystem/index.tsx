"use client";
import { useState } from "react";

import WelcomeScreen from "../WelcomeScreen";
import SearchBar from "./SearchBar";
import AppsMenu from "./AppsMenu";
import Desktop from "./Desktop";
import Dock from "./Dock";
import WelcomeBanner from "./WelcomeBanner";

import { UsersService } from "src/services/client";

import type { User } from "src/types";

type Props = { initialUser: User | null}

const OperatingSystem = ({ initialUser }: Props) => {
  const [welcome, setWelcome] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const { data: user } = UsersService.useMe({ initialData: initialUser  });

  if (welcome) {
    return <WelcomeScreen user={user} enter={() => setWelcome(false)} />;
  }

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <SearchBar />
      {isMenuOpen && <AppsMenu closeMenu={closeMenu} />}
      <Desktop />
      <Dock toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <WelcomeBanner user={user as User} />
    </>
  );
};

export default OperatingSystem;
