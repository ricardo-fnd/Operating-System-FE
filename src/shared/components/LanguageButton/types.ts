import type { LANGUAGES, SUPPORTED_LANGUAGES } from "src/enums";

type LanguageButtonProps = {
  className?: string;
  language: SUPPORTED_LANGUAGES;
};

type LanguageMenuProps = {
  close: () => void;
  language: (typeof LANGUAGES)[0];
  setLanguage: (lang: (typeof LANGUAGES)[0]) => void;
};

type Language = {
  onClick: () => void;
  active: boolean;
  label: (typeof LANGUAGES)[0]["label"];
};

export type { LanguageMenuProps, Language, LanguageButtonProps };
