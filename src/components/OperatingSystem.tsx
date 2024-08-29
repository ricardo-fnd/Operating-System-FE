"use client";
import { useState } from "react";

import AppsMenu from "./AppsMenu";
import SearchBar from "./SearchBar";
import Desktop from "./Desktop";
import Dock from "./Dock";

import { SUPPORTED_LANGUAGES } from "src/enums";

type Props = {
  language: SUPPORTED_LANGUAGES;
};

const OperatingSystem = ({ language }: Props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

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
