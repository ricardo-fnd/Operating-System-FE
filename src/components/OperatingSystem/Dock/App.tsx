import { Tooltip } from "src/shared/components";

import { useLabels } from "src/services/client";
import { AppsService } from "src/services";

import type { Application } from "src/types";

const StyledApp =
  "flex items-center h-full px-3 cursor-pointer bg-zinc-600 data-[minimized=true]:bg-zinc-700 hover:data-[minimized=true]:bg-zinc-600";

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
        place="top"
        delayShow={300}
        anchorSelect={`#${tooltipId}`}
      >
        <p>{getLabel(app.name)}</p>
      </Tooltip>
    </>
  );
};

export default App;
