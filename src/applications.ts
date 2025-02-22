import { TbWorldWww } from "react-icons/tb";
import { FcButtingIn } from "react-icons/fc";
import { RxAvatar } from "react-icons/rx";

import {
  About,
  Browser,
  Profile,
} from "src/components/OperatingSystem/Applications";

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
    showIcon: true,
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
    showIcon: true,
  },
  {
    id: 3,
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
