"use client";
import { useState } from "react";

import LanguageModal from "./Modal";

import { LANGUAGES } from "src/enums";

import type { LanguageMenuProps } from "./types";

const StyledContainer = "relative";
const StyledLanguage = "p-1 text-xs border-[1px] cursor-pointer";

const LanguageMenu = ({ language }: LanguageMenuProps) => {
  const [showModal, setShowModal] = useState(false);
  const [currentLang, setCurrentLang] = useState(
    LANGUAGES.find(({ value }) => value === language) ?? LANGUAGES[0]
  );

  const closeModal = () => setShowModal(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className={StyledContainer}>
      <div className={StyledLanguage} onClick={toggleModal}>
        {currentLang.abbv}
      </div>
      {showModal && (
        <LanguageModal
          close={closeModal}
          language={currentLang}
          setLanguage={setCurrentLang}
        />
      )}
    </div>
  );
};

export default LanguageMenu;
