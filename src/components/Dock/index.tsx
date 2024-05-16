"use client";
import Menu from "./Menu";
import App from "./App";
import LanguageMenu from "./LanguageMenu";

import { useApps } from "src/context";

import type { DockProps } from "./types";

const Footer =
  "flex items-center gap-2 h-[60px] min-h-[60px] pr-3 text-white bg-[#212121]";
const StyledApps = "flex gap-2 w-full h-full";

const Dock = ({ language, toggleMenu, menuOpen }: DockProps) => {
  const apps = useApps();

  return (
    <footer className={Footer}>
      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className={StyledApps}>
        {apps.map((app) =>
          app.opened ? <App key={app.id} app={app} /> : null
        )}
      </div>
      <LanguageMenu language={language} />
    </footer>
  );
};

export default Dock;
