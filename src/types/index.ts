import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export type Translations = {
  [key: string]: string;
};

export type User = {
  id: number;
  name?: string;
  email?: string;
  username: string;
  avatar?: string;
  guest: boolean;
  createdAt: string;
};

export type Guest = {
  name: string;
  guest: boolean;
};

export type BrowserHistory = { active: boolean; search: string }[];

export type ShortcutsPositions = {
  appId: Application["id"];
  x: number;
  y: number;
}[];

export type Application = {
  id: number;
  Icon: IconType;
  name: string;
  component: () => ReactNode;
  opened: boolean;
  minimized: boolean;
  maximized: boolean;
  priority: number;
  initialPosition?: { x: number; y: number };
  shortcutPosition?: { x: number; y: number };
};

export type GoogleSearchResults = {
  data: {
    title: string;
    link: string;
    domain: string;
    description: string;
  }[];
  metadata: {
    total: string;
    searchTime: number;
    maxPages: number;
    page: number;
  };
};
