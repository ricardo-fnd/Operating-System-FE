import AppShortcut from "./AppShortcut";

import { useApps } from "src/context/AppsContext";

const StyledShortcuts = "flex flex-col flex-wrap content-start w-full h-full";

const Shortcuts = () => {
  const apps = useApps();

  return apps.map((app) => (
    <div key={app.id} className={StyledShortcuts}>
      <AppShortcut app={app} />
    </div>
  ));
};

export default Shortcuts;
