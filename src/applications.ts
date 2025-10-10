import { TbWorldWww } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";

import {
  Browser,
  Profile,
} from "src/components/OperatingSystem/Applications";

import type { Application } from "src/types";

const APPLICATIONS: Application[] = [
  {
    id: 1,
    Icon: TbWorldWww,
    name: "apps.browser.app-name",
    component: Browser,
    opened: false,
    minimized: true,
    maximized: false,
    priority: 0,
    showIcon: true,
  },
  {
    id: 2,
    Icon: RxAvatar,
    name: "commons.profile",
    component: Profile,
    opened: false,
    minimized: true,
    maximized: false,
    priority: 0,
    showIcon: false,
  },
];

export default APPLICATIONS;
