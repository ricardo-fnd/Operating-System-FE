"use client";
import Menu from "./Menu";
import App from "./App";

import { useApps } from "src/context/AppsContext";

const Footer =
  "flex items-center gap-2 h-[60px] min-h-[60px] text-white bg-[#212121]";
const StyledApps = "flex gap-2 w-full h-full";

const Dock = () => {
  const apps = useApps();

  return (
    <footer className={Footer}>
      <Menu />
      <div className={StyledApps}>
        {apps.map((app) =>
          app.opened ? <App key={app.id} app={app} /> : null
        )}
      </div>
    </footer>
  );
};

export default Dock;
