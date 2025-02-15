import type { LANGUAGES, SUPPORTED_LANGUAGES } from "src/enums";
import type { ButtonProps } from "../Buttons/Button";

type LanguageButtonProps = {
  color?: ButtonProps["color"];
  className?: string;
  language: SUPPORTED_LANGUAGES;
};

type LanguageMenuProps = {
  close: () => void;
  language: (typeof LANGUAGES)[0];
  setLanguage: (lang: (typeof LANGUAGES)[0]) => void;
};

export type { LanguageMenuProps, LanguageButtonProps };
