import { useRef } from "react";

import { useUpdateTranslations } from "src/context";
import { useOnClickOutside } from "src/hooks";
import { LANGUAGES } from "src/enums";
import { TranslationsService } from "src/services";
import { setCookies } from "src/services/client";

import type { Language, LanguageMenuProps } from "./types";

const StyledMenu =
  "absolute bottom-14 right-0 p-2 bg-white/25 border-[1px] rounded-sm";
const StyledLanguage =
  "py-1 px-2 cursor-pointer data-[active=true]:bg-white/50 hover:bg-white/25 hover:rounded-sm";

const LanguageMenu = ({ close, language, setLanguage }: LanguageMenuProps) => {
  const ref = useRef(null);
  const updateTranslations = useUpdateTranslations();

  useOnClickOutside({ ref, handler: close });

  const changeLanguage = async (
    value: LanguageMenuProps["language"]["value"]
  ) => {
    const newLang = LANGUAGES.find((lang) => lang.value === value);
    const translations = await TranslationsService.getTranslations({
      language: value,
    });

    updateTranslations(translations);
    setLanguage(newLang as (typeof LANGUAGES)[0]);
    setCookies({ name: "NEXT_LOCALE", value });
    close();
  };

  return (
    <menu ref={ref} className={StyledMenu}>
      {LANGUAGES.map(({ label, value }) => (
        <Language
          key={value}
          label={label}
          active={value === language.value}
          onClick={() => changeLanguage(value)}
        />
      ))}
    </menu>
  );
};

const Language = ({ label, active, onClick }: Language) => (
  <p onClick={onClick} className={StyledLanguage} data-active={active}>
    {label}
  </p>
);

export default LanguageMenu;
