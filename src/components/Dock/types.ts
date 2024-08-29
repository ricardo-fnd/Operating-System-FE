import { SUPPORTED_LANGUAGES } from "src/enums";

import type { Application } from "src/applications";

type DockProps = {
  toggleMenu: () => void;
  isMenuOpen: boolean;
  language: SUPPORTED_LANGUAGES;
};

type MenuProps = {
  toggleMenu: () => void;
  isMenuOpen: boolean;
};

type AppProps = {
  app: Application;
};

export type { DockProps, MenuProps, AppProps };
