import AppShortcut from "./AppShortcut";

import { useApps } from "src/context";

const StyledShortcuts =
  "flex flex-col flex-wrap content-start w-full h-[calc(100%-60px)] p-4";

const Shortcuts = () => {
  const apps = useApps();

  return (
    <div className={StyledShortcuts}>
      {apps.map(
        (app) => app.showIcon && <AppShortcut key={app.id} app={app} />
      )}
    </div>
  );
};

export default Shortcuts;
