import type { LANGUAGES } from "src/enums";
import type { ButtonProps } from "../Buttons/Button";

type LanguageButtonProps = {
  color?: ButtonProps["color"];
  className?: string;
};

type LanguageMenuProps = {
  close: () => void;
  language: (typeof LANGUAGES)[0];
  setMenuLanguage: (lang: (typeof LANGUAGES)[0]) => void;
};

export type { LanguageMenuProps, LanguageButtonProps };
