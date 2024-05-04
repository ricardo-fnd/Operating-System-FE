import { Resume } from "src/components/Applications";

import { FcLinux } from "react-icons/fc";

import type { ReactNode } from "react";
import type { IconType } from "react-icons";

type Application = {
  id: number;
  Icon: IconType;
  name: string;
  component: () => ReactNode;
  opened: boolean;
  minimized: boolean;
};

const APPLICATIONS: Application[] = [
  {
    id: 1,
    Icon: FcLinux,
    name: "About me",
    component: Resume,
    opened: false,
    minimized: true,
  },
];

export type { Application };
export default APPLICATIONS;
