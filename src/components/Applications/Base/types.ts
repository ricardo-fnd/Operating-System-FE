import type { Application } from "src/applications";

type BaseApplicationProps = {
  children: React.ReactNode;
  app: Application;
};

type TopBarProps = { app: Application };

type ButtonsProps = { app: Application };

type CloseButton = { app: Application };

type MinimizeButton = { app: Application };

export type {
  BaseApplicationProps,
  TopBarProps,
  ButtonsProps,
  CloseButton,
  MinimizeButton,
};
