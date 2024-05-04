import type { Application } from "src/applications";

type DockProps = {
  toggleMenu: () => void;
  menuOpen: boolean;
};

type MenuProps = DockProps;

type AppProps = {
  app: Application;
};

export type { DockProps, MenuProps, AppProps };
