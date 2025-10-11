import Buttons from "./Buttons";

import { useLabels } from "src/services/client";
import { AppsService } from "src/services";

import type { Application } from "src/types";

const StyledHeader =
  "handle flex justify-between items-center h-10 px-4 bg-zinc-950 border-b border-zinc-700 cursor-grab";
const StyledTitle = "text-white text-sm font-medium";

const TopBar = ({ app }: { app: Application }) => {
  const getLabel = useLabels();
  const maximize = AppsService.useMaximize();

  return (
    <header className={StyledHeader} onDoubleClick={() => maximize(app)}>
      <h3 className={StyledTitle}>{getLabel(app.name)}</h3>
      <Buttons app={app} />
    </header>
  );
};

export default TopBar;
