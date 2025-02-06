import { Tooltip } from "react-tooltip";

import { useLabels } from "src/services/client";
import { AppsService } from "src/services";

import type { Application } from "src/types";

const StyledApp =
  "flex items-center h-full px-3 cursor-pointer bg-white/50 data-[minimized=true]:bg-white/25 hover:data-[minimized=true]:bg-white/50";
const StyledTooltip = "!bg-[#212121]";

const App = ({ app }: { app: Application }) => {
  const getLabel = useLabels();
  const bringToFront = AppsService.useMinimize();
  const { Icon } = app;

  const tooltipId = `app-${app.id}-dock-shortcut`;

  return (
    <>
      <div
        id={tooltipId}
        className={StyledApp}
        data-minimized={app.minimized}
        onClick={() => bringToFront(app)}
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
