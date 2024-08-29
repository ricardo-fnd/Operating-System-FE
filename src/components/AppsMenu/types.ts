import type { Application } from "src/applications";

type MenuProps = {
  closeMenu: () => void;
};

type AppShortcutProps = {
  app: Application;
};

export type { MenuProps, AppShortcutProps };
