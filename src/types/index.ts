import type { ComponentType, ReactNode } from "react";
import type { SUPPORTED_LANGUAGES } from "src/enums";
import type { IconProps } from "src/shared/components/Icons/types";

export type Translations = {
  [key: string]: string;
  language: SUPPORTED_LANGUAGES;
};

export type User = {
  id: number;
  name?: string;
  email?: string;
  emailConfirmed: boolean;
  username?: string;
  avatar?: string;
  guest: boolean;
  createdAt: string;
  companyName?: string;
  job?: string;
  public?: boolean;
};

export type Guest = {
  name: string;
  guest: boolean;
};

export type BrowserHistory = { active: boolean; search: string }[];

export type ShortcutPosition = {
  appId: Application["id"];
  x: number;
  y: number;
};

export type ShortcutsPositions = {
  [userId: string]: ShortcutPosition[];
};

export type Application = {
  id: number;
  Icon: ComponentType<IconProps>;
  name: string;
  component: () => ReactNode;
  opened: boolean;
  minimized: boolean;
  maximized: boolean;
  priority: number;
  showIcon: boolean;
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

export type WebSocketMessage = {
  type: "user_online" | "user_offline" | "online_users";
  user_ids?: number[];
  user?: { id: number; name: string; };
};