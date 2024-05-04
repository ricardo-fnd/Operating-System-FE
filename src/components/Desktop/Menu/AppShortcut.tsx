import { useAppsUpdate } from "src/context/AppsContext";

import type { AppShortcutProps } from "./types";

const StyledShortcut =
  "flex flex-col items-center justify-center w-32 h-32 bg-[#ffffff5b] cursor-pointer hover:bg-[#ffffff80]";

const AppShortcut = ({ app }: AppShortcutProps) => {
  const updateApps = useAppsUpdate();
  const { id, Icon, name } = app;

  const openApp = () => {
    updateApps((apps) =>
      apps.map((app) => {
        if (app.id === id) {
          app.opened = true;
          app.minimized = false;
        }
        return app;
      })
    );
  };

  return (
    <li className={StyledShortcut} onClick={openApp}>
      <Icon size="75" />
      <p>{name}</p>
    </li>
  );
};

export default AppShortcut;
