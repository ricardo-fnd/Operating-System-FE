import type { SUPPORTED_LANGUAGES } from "src/enums";

type Dock = {
  toggleMenu: () => void;
  isMenuOpen: boolean;
  language: SUPPORTED_LANGUAGES;
};

type Menu = {
  toggleMenu: () => void;
  isMenuOpen: boolean;
};

export type { Dock, Menu };
