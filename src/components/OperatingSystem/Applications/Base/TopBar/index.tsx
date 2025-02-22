import Buttons from "./Buttons";

import { useLabels } from "src/services/client";
import { AppsService } from "src/services";

import type { Application } from "src/types";

const StyledHeader =
  "handle flex justify-between py-1 px-4 bg-white border-b-[1px] border-black cursor-grab";

const TopBar = ({ app }: { app: Application }) => {
  const getLabel = useLabels();
  const maximize = AppsService.useMaximize();

  return (
    <header className={StyledHeader} onDoubleClick={() => maximize(app)}>
      <h3>{getLabel(app.name)}</h3>
      <Buttons app={app} />
    </header>
  );
};

export default TopBar;
