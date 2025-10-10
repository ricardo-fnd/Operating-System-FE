'use client';
import { useState } from "react";

import { AboutProjectModal, LanguageButton } from "src/shared/components";

import { useLabels } from "src/services/client";

const StyledFooter = "flex items-center justify-between h-[60px] min-h-[60px] px-6 text-xs text-gray-600 border-t border-gray-800";
const StyledRight = "flex items-center gap-4";
const StyledLink = "text-gray-400 hover:text-gray-300 cursor-pointer transition-colors duration-200 underline underline-offset-4";

const Footer = () => {
  const getLabel = useLabels();
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <footer className={StyledFooter}>
        <span>{getLabel("welcome-screen.copyright")}</span>
        <div className={StyledRight}>
          <button className={StyledLink} onClick={() => setShowAbout(true)}>
            {getLabel("welcome-screen.about")}
          </button>
          <LanguageButton />
        </div>
      </footer>
      {showAbout && <AboutProjectModal close={() => setShowAbout(false)} />}
    </>
  );
};

export default Footer;

