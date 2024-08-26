import type { Application } from "src/applications";

type BaseApplicationProps = {
  children: React.ReactNode;
  app: Application;
};

type TopBarProps = {
  app: Application;
};

type ButtonsProps = {
  appId: Application["id"];
};

type CloseButton = {
  appId: Application["id"];
};

type MinimizeButton = {
  appId: Application["id"];
};

export type {
  BaseApplicationProps,
  TopBarProps,
  ButtonsProps,
  CloseButton,
  MinimizeButton,
};
