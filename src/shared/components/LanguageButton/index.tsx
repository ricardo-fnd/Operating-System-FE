"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import LanguageMenu from "./Menu";

import { LANGUAGES } from "src/enums";
import { useTranslations } from "src/context";

import type { LanguageButtonProps } from "./types";

const StyledContainer = "relative";
const StyledButton = "text-sm text-white min-w-[20px]";

const LanguageButton = ({ className }: LanguageButtonProps) => {
  const { language } = useTranslations();
  const [showMenu, setShowMenu] = useState(false);
  const [currentLang, setCurrentLang] = useState(
    LANGUAGES.find(({ value }) => value === language) ?? LANGUAGES[0]
  );

  const closeMenu = () => setShowMenu(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const style = twMerge(StyledButton, className);

  return (
    <div className={StyledContainer}>
      <button
        id="language-button"
        className={style}
        onClick={toggleMenu}
        data-menu-open={showMenu}
      >
        <span>{currentLang.abbv}</span>
      </button>
      {showMenu && (
        <LanguageMenu
          close={closeMenu}
          language={currentLang}
          setMenuLanguage={setCurrentLang}
        />
      )}
    </div>
  );
};

export default LanguageButton;
