"use client";
import Menu from "./Menu";
import App from "./App";
import { LanguageButton } from "src/shared/components";

import { useApps } from "src/context";
import { UsersService } from "src/services/client";

import type { Dock } from "./types";

const StyledFooter =
  "absolute bottom-0 left-0 flex items-center gap-2 w-full h-[60px] min-h-[60px] pr-3 text-white bg-[#212121]/75 z-50 backdrop-blur-[2px]";
const StyledApps = "flex gap-1 w-full h-full";
const StyledUsername = "text-sm";

const Dock = ({ language, toggleMenu, isMenuOpen }: Dock) => {
  const apps = useApps();
  const { data: user } = UsersService.useMe();

  return (
    <footer className={StyledFooter}>
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className={StyledApps}>
        {apps.map((app) =>
          app.opened ? <App key={app.id} app={app} /> : null
        )}
      </div>
      <p className={StyledUsername}>{user?.name ?? user?.username}</p>
      <LanguageButton language={language} />
    </footer>
  );
};

export default Dock;
