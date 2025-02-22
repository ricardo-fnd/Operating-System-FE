"use client";
import { useState } from "react";

import WelcomeScreen from "./WelcomeScreen";
import SearchBar from "./SearchBar";
import AppsMenu from "./AppsMenu";
import Desktop from "./Desktop";
import Dock from "./Dock";
import WelcomeBanner from "./WelcomeBanner";

const OperatingSystem = () => {
  const [welcome, setWelcome] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);

  if (welcome) return <WelcomeScreen enter={() => setWelcome(false)} />;

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <SearchBar />
      {isMenuOpen && <AppsMenu closeMenu={closeMenu} />}
      <Desktop />
      <Dock toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <WelcomeBanner />
    </>
  );
};

export default OperatingSystem;
