"use client";
import Shortcuts from "./Shortcuts";
import BaseApplication from "../Applications/Base";
import Menu from "./Menu";

import { useApps } from "src/context";

import type { DesktopProps } from "./types";

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

  return openedApps.map((app) => {
    const Application = app.component;

    return (
      <BaseApplication key={app.id} app={app}>
        <Application />
      </BaseApplication>
    );
  });
};

export default Desktop;
