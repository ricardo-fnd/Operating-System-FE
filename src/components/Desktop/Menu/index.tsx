import AppShortcut from "./AppShortcut";

import { useApps } from "src/context/AppsContext";

import type { MenuProps } from "./types";

const StyledContainer = "absolute top-0 left-0 flex items-center w-full h-full";
const StyledMenu = "flex flex-wrap justify-center w-full p-4";

const Menu = ({ closeMenu }: MenuProps) => {
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

export default Menu;
