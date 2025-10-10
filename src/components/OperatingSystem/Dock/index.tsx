"use client";
import Menu from "./Menu";
import App from "./App";
import UserInformation from "./UserInformation";
import { LanguageButton } from "src/shared/components";

import { useApps } from "src/context";

import type { Dock } from "./types";

const StyledFooter =
  "absolute bottom-0 left-0 flex items-center gap-1 w-full h-[60px] min-h-[60px] pr-6 text-white bg-zinc-900/75 border-t border-gray-800 z-50 backdrop-blur-[2px]";
const StyledApps = "flex gap-1 w-full h-full";
const StyledDesktopInformation = "flex items-center gap-2";

const Dock = ({ toggleMenu, isMenuOpen }: Dock) => {
  const apps = useApps();

  return (
    <footer className={StyledFooter}>
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className={StyledApps}>
        {apps.map((app) =>
          app.opened && app.showIcon ? <App key={app.id} app={app} /> : null
        )}
      </div>
      <div className={StyledDesktopInformation}>
        <UserInformation />
        <LanguageButton />
      </div>
    </footer>
  );
};

export default Dock;
