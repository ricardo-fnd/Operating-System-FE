"use client";
import Shortcuts from "./Shortcuts";
import BaseApplication from "../Applications/Base";

import { useApps } from "src/context/AppsContext";

//60px Height from Dock
const Main = "p-4 w-full h-[calc(100%-60px)] bg-[#131313]";

const Desktop = () => {
  return (
    <main className={Main}>
      <Shortcuts />
      <RunningApps />
    </main>
  );
};

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
