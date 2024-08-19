import { useLabels } from "src/services/client";
import { useAppsUpdate } from "src/context";

import type { AppShortcutProps } from "../types";

const StyledShortcut =
  "flex flex-col items-center w-fit p-2 pt-1 text-white text-xs rounded-md cursor-pointer hover:bg-white/25";

const AppShortcut = ({ app }: AppShortcutProps) => {
  const getLabel = useLabels();
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
    <div className={StyledShortcut} onClick={openApp}>
      <Icon size="50" />
      <p>{getLabel(name)}</p>
    </div>
  );
};

export default AppShortcut;
