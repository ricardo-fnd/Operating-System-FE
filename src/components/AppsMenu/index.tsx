import AppShortcut from "./AppShortcut";

import { useApps } from "src/context";

import type { MenuProps } from "./types";

const StyledContainer =
  "absolute top-0 left-0 flex items-center w-screen h-screen z-50 bg-black/75 z-50 backdrop-blur-[2px]";
const StyledMenu = "flex flex-wrap justify-center w-full p-4";

const AppsMenu = ({ closeMenu }: MenuProps) => {
  const apps = useApps();

  return (
    <div className={StyledContainer} onClick={closeMenu}>
      <menu className={StyledMenu}>
        {apps.map((app) => (
          <AppShortcut key={app.id} app={app} />
        ))}
      </menu>
    </div>
  );
};

export default AppsMenu;
