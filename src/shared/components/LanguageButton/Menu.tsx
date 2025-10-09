import Image from "next/image";

import Menu, { MenuOption } from "src/shared/components/Menu";

import { useUpdateTranslations } from "src/context";
import { LANGUAGES } from "src/enums";
import { TranslationsService } from "src/services";

import type { LanguageMenuProps } from "./types";

const StyledMenu = "bottom-10";
const StyledMenuOption = "gap-2 px-3 py-1.5 data-[active=true]:bg-zinc-800 hover:bg-zinc-800 transition-colors [&_img]:max-w-none";

const LanguageMenu = ({
  close,
  language,
  setMenuLanguage,
}: LanguageMenuProps) => {
  const updateTranslations = useUpdateTranslations();

  const changeLanguage = async (
    language: LanguageMenuProps["language"]["value"]
  ) => {
    const newLang = LANGUAGES.find((lang) => lang.value === language);
    const translations = await TranslationsService.getTranslations({
      language,
    });

    updateTranslations({ ...translations, language });
    setMenuLanguage(newLang as (typeof LANGUAGES)[0]);
    close();
  };

  const options = { ignore: ["language-button"] };

  return (
    <Menu close={close} options={options} className={StyledMenu}>
      {LANGUAGES.map(({ label, value, flag }) => (
        <MenuOption
          key={value}
          className={StyledMenuOption}
          data-active={value === language.value}
          onClick={() => changeLanguage(value)}
        >
          <Image src={flag} width={18} height={18} alt={label} />
          <p>{label}</p>
        </MenuOption>
      ))}
    </Menu>
  );
};

export default LanguageMenu;
