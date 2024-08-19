"use client";
import Shortcuts from "./Shortcuts";
import BaseApplication from "../Applications/Base";
import Menu from "./Menu";

import { useApps } from "src/context";

import type { DesktopProps } from "./types";

//DOCK_HEIGHT = 60;
const StyledMain =
  "relative w-full h-full bg-[#131313] [&>*:not(:last-child)]:data-[menu=true]:blur-sm";

const Desktop = ({ closeMenu, menuOpen }: DesktopProps) => (
  <main data-menu={menuOpen} className={StyledMain}>
    <Shortcuts />
    <RunningApps />
    {menuOpen && <Menu closeMenu={closeMenu} />}
  </main>
);

const RunningApps = () => {
  const apps = useApps();
  const openedApps = apps.filter((app) => app.opened);

  return openedApps.map(({ component: Application, ...app }) => (
    <BaseApplication key={app.id} app={app}>
      <Application />
    </BaseApplication>
  ));
};

export default Desktop;
