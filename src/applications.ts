import { TbWorldWww } from "react-icons/tb";
import { FcButtingIn } from "react-icons/fc";

import { About, Browser } from "src/components/Applications";

import type { Application } from "src/types";

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
  {
    id: 2,
    Icon: TbWorldWww,
    name: "apps.browser.app-name",
    component: Browser,
    opened: false,
    minimized: true,
    maximized: false,
    priority: 0,
  },
];

export default APPLICATIONS;
