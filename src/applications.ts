import { About } from "src/components/Applications";

import { FcButtingIn } from "react-icons/fc";

import type { ReactNode } from "react";
import type { IconType } from "react-icons";

type AppsPosition = {
  appId: Application["id"];
  x: number;
  y: number;
}[];

type Application = {
  id: number;
  Icon: IconType;
  name: string;
  component: () => ReactNode;
  opened: boolean;
  minimized: boolean;
  maximized: boolean;
  priority: number;
  position?: { x: number; y: number };
};

const APPLICATIONS: Application[] = [
  {
    id: 1,
    Icon: FcButtingIn,
    name: "apps.about.app-name",
    component: About,
    opened: false,
    minimized: true,
    maximized: false,
    priority: 0,
  },
];

export type { Application, AppsPosition };
export default APPLICATIONS;
