import { SUPPORTED_LANGUAGES } from "src/enums";

import type { Application } from "src/applications";

type DockProps = {
  toggleMenu: () => void;
  menuOpen: boolean;
  language: SUPPORTED_LANGUAGES;
};

type MenuProps = {
  toggleMenu: () => void;
  menuOpen: boolean;
};

type AppProps = {
  app: Application;
};

export type { DockProps, MenuProps, AppProps };
