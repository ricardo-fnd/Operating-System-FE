import { useAppsUpdate } from "src/context/AppsContext";

import type { AppProps } from "./types";

const StyledApp =
  "flex items-center h-full px-3 cursor-pointer bg-white/50 data-[minimized=true]:bg-white/25 hover:data-[minimized=true]:bg-white/50";

const App = ({ app }: AppProps) => {
  const updateApps = useAppsUpdate();
  const { id, Icon } = app;

  const maximizeApp = () => {
    updateApps((apps) => {
      const index = apps.findIndex((app) => app.id === id);
      const appsCopy = [...apps];

      const app = { ...apps[index] };
      appsCopy[index] = { ...app, minimized: !app.minimized };

      return [...appsCopy];
    });
  };

  return (
    <div
      className={StyledApp}
      onClick={maximizeApp}
      data-minimized={app.minimized}
    >
      <Icon size="36" />
    </div>
  );
};

export default App;
