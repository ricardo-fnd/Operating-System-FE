import { Tooltip } from "react-tooltip";

import { useLabels } from "src/services/client";
import { useAppsUpdate } from "src/context";

import type { AppProps } from "./types";

const StyledApp =
  "flex items-center h-full px-3 cursor-pointer bg-white/50 data-[minimized=true]:bg-white/25 hover:data-[minimized=true]:bg-white/50";
const StyledTooltip = "!bg-[#212121]";

const App = ({ app }: AppProps) => {
  const getLabel = useLabels();
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

  const tooltipId = `app-${app.id}-dock-shortcut`;

  return (
    <>
      <div
        id={tooltipId}
        className={StyledApp}
        onClick={maximizeApp}
        data-minimized={app.minimized}
      >
        <Icon size="36" />
      </div>
      <Tooltip
        noArrow
        delayShow={300}
        className={StyledTooltip}
        anchorSelect={`#${tooltipId}`}
      >
        <p>{getLabel(app.name)}</p>
      </Tooltip>
    </>
  );
};

export default App;
