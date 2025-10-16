"use client";
import { useState, useEffect } from "react";

import WelcomeScreen from "../WelcomeScreen";
import SearchBar from "./SearchBar";
import AppsMenu from "./AppsMenu";
import Desktop from "./Desktop";
import Dock from "./Dock";
import WelcomeBanner from "./WelcomeBanner";

import { useLabels, UsersService } from "src/services/client";
import NotificationsService from "src/services/notifications-service";

import type { User } from "src/types";

type Props = { initialUser: User | null}

const OperatingSystem = ({ initialUser }: Props) => {
  const getLabel = useLabels();
  const [welcome, setWelcome] = useState(!initialUser);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const { data: user } = UsersService.useMe({ initialData: initialUser });

  useEffect(() => {
    if (initialUser) {
      const name = initialUser.name ?? initialUser.username ?? initialUser.email?.split("@")[0] ?? "";
      NotificationsService.info(getLabel('welcome-back.user', { name }), "top-right");
    }
  }, [initialUser]);

  if (welcome) return <WelcomeScreen enter={() => setWelcome(false)} />;
  
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
