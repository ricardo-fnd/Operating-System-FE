import type { Application } from "src/applications";

type DesktopProps = {
  closeMenu: () => void;
  menuOpen: boolean;
};

type AppShortcutProps = {
  app: Application;
};

export type { DesktopProps, AppShortcutProps };
