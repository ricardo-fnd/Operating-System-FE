import { useAppsUpdate } from "src/context/AppsContext";

import type { AppProps } from "./type";

const StyledApp =
  "flex items-center h-full px-2 data-[minimized=true]:cursor-pointer data-[minimized=false]:bg-white/25 hover:bg-white/25";

const App = ({ app }: AppProps) => {
  const updateApps = useAppsUpdate();
  const { id, Icon } = app;

  const maximizeApp = () => {
    updateApps((apps) =>
      apps.map((app) => {
        if (app.id === id) app.minimized = false;
        return app;
      })
    );
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
