"use client";
import Shortcuts from "./Shortcuts";
import BaseApplication from "../Applications/Base";
import { OnlineUsersWidget } from "src/shared/components";

import { useApps } from "src/context";

const StyledMain = "relative w-full h-full bg-black";

const Desktop = () => (
    <main className={StyledMain}>
      <Shortcuts />
      <RunningApps />
      <OnlineUsersWidget />
    </main>
);

const RunningApps = () => {
  const apps = useApps();
  const openedApps = apps.filter((app) => app.opened);

  return openedApps.map((app) => {
    const Application = app.component;

    return (
      <BaseApplication key={app.id} app={app}>
        <Application app={app} />
      </BaseApplication>
    );
  });
};

export default Desktop;
