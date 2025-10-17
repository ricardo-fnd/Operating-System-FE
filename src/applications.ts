import { BrowserIcon, ProfileIcon } from "src/shared/components";
import {
  Browser,
  Profile,
} from "src/components/OperatingSystem/Applications";

import type { Application } from "src/types";

const APPLICATIONS: Application[] = [
  {
    id: 1,
    Icon: BrowserIcon,
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
    Icon: ProfileIcon,
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
