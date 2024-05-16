"use client";
import { useState } from "react";

import Desktop from "./Desktop";
import Dock from "./Dock";

import { SUPPORTED_LANGUAGES } from "src/enums";
import { AppsProvider } from "src/context";

type Props = {
  language: SUPPORTED_LANGUAGES;
};

const OperatingSystem = ({ language }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <AppsProvider>
      <Desktop closeMenu={closeMenu} menuOpen={menuOpen} />
      <Dock language={language} toggleMenu={toggleMenu} menuOpen={menuOpen} />
    </AppsProvider>
  );
};

export default OperatingSystem;
