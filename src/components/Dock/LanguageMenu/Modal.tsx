import { useRef } from "react";

import { useUpdateTranslations } from "src/context";
import { useOnClickOutside } from "src/hooks";
import { LANGUAGES } from "src/enums";
import { TranslationsService } from "src/services";
import { setCookies } from "src/services/client";

import type { LanguageProps, LanguagesModalProps } from "./types";

const StyledModal =
  "absolute bottom-14 right-0 p-2 bg-white/25 border-[1px] rounded-sm";
const StyledLanguage =
  "py-1 px-2 cursor-pointer data-[active=true]:bg-white/50 hover:bg-white/25 hover:rounded-sm";

const LanguageModal = ({
  close,
  language,
  setLanguage,
}: LanguagesModalProps) => {
  const ref = useRef(null);
  const updateTranslations = useUpdateTranslations();

  useOnClickOutside({ ref, handler: close });

  const changeLanguage = async (
    value: LanguagesModalProps["language"]["value"]
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
    <div ref={ref} className={StyledModal}>
      {LANGUAGES.map(({ label, value }) => (
        <Language
          key={value}
          label={label}
          active={value === language.value}
          onClick={() => changeLanguage(value)}
        />
      ))}
    </div>
  );
};

const Language = ({ label, active, onClick }: LanguageProps) => (
  <p onClick={onClick} className={StyledLanguage} data-active={active}>
    {label}
  </p>
);

export default LanguageModal;
