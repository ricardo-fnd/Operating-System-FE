import { LanguageButton } from "src/shared/components";

import { useLabels } from "src/services/client";

const StyledFooter = "flex items-center justify-between h-[60px] min-h-[60px] px-6 text-xs text-gray-600 border-t border-gray-800";

const Footer = () => {
  const getLabel = useLabels();

  return (
    <footer className={StyledFooter}>
      <span>{getLabel("welcome-screen.copyright")}</span>
      <LanguageButton color="zinc" />
    </footer>
  );
};

export default Footer;

