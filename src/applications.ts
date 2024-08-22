import { About } from "src/components/Applications";

import { FcButtingIn } from "react-icons/fc";

import type { ReactNode } from "react";
import type { IconType } from "react-icons";

type Application = {
  id: number;
  Icon: IconType;
  name: string;
  component: () => ReactNode;
  opened: boolean;
  minimized: boolean;
  maximized: boolean;
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
  },
];

export type { Application };
export default APPLICATIONS;
