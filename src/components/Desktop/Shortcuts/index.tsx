import AppShortcut from "./AppShortcut";

import { useApps } from "src/context/AppsContext";

const Shortcuts = () => {
  const apps = useApps();

  return apps.map((app) => <AppShortcut key={app.id} app={app} />);
};

export default Shortcuts;
