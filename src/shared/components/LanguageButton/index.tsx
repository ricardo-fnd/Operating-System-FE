"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { Button } from "../Buttons";
import LanguageMenu from "./Menu";

import { LANGUAGES } from "src/enums";

import type { LanguageButtonProps } from "./types";

const StyledContainer = "relative";
const StyledButton =
  "py-1 px-1.5 text-xs rounded-lg data-[menu-open=true]:bg-zinc-600";

const LanguageButton = ({
  color,
  className,
  language,
}: LanguageButtonProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentLang, setCurrentLang] = useState(
    LANGUAGES.find(({ value }) => value === language) ?? LANGUAGES[0]
  );

  const closeMenu = () => setShowMenu(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const style = twMerge(StyledButton, className);

  return (
    <div className={StyledContainer}>
      <Button
        color={color}
        id="language-button"
        className={style}
        onClick={toggleMenu}
        data-menu-open={showMenu}
      >
        {currentLang.abbv}
      </Button>
      {showMenu && (
        <LanguageMenu
          close={closeMenu}
          language={currentLang}
          setLanguage={setCurrentLang}
        />
      )}
    </div>
  );
};

export default LanguageButton;
