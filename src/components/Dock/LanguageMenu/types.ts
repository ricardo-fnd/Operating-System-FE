import { LANGUAGES, SUPPORTED_LANGUAGES } from "src/enums";

type LanguageMenuProps = {
  language: SUPPORTED_LANGUAGES;
};

type LanguagesModalProps = {
  close: () => void;
  language: (typeof LANGUAGES)[0];
  setLanguage: (lang: (typeof LANGUAGES)[0]) => void;
};

type LanguageProps = {
  onClick: () => void;
  active: boolean;
  label: (typeof LANGUAGES)[0]["label"];
};

export type { LanguagesModalProps, LanguageProps, LanguageMenuProps };
