"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import LanguageMenu from "./Menu";

import { LANGUAGES } from "src/enums";

import type { LanguageButtonProps } from "./types";

const StyledContainer = "relative";
const StyledLanguage = "p-1 text-xs border-[1px] cursor-pointer";

const LanguageButton = ({ className, language }: LanguageButtonProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentLang, setCurrentLang] = useState(
    LANGUAGES.find(({ value }) => value === language) ?? LANGUAGES[0]
  );

  const closeModal = () => setShowMenu(false);
  const toggleModal = () => setShowMenu(!showMenu);

  const style = twMerge(StyledContainer, className);

  return (
    <div className={style}>
      <div className={StyledLanguage} onClick={toggleModal}>
        {currentLang.abbv}
      </div>
      {showMenu && (
        <LanguageMenu
          close={closeModal}
          language={currentLang}
          setLanguage={setCurrentLang}
        />
      )}
    </div>
  );
};

export default LanguageButton;
