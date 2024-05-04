"use client";
import { useState } from "react";

import Desktop from "./Desktop";
import Dock from "./Dock";

import { AppsProvider } from "src/context/AppsContext";

const OperatingSystem = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <AppsProvider>
      <Desktop closeMenu={closeMenu} menuOpen={menuOpen} />
      <Dock toggleMenu={toggleMenu} menuOpen={menuOpen} />
    </AppsProvider>
  );
};

export default OperatingSystem;
