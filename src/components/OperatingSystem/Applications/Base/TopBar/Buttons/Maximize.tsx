import { FiMaximize2 } from "react-icons/fi";

import { AppsService } from "src/services";

import type { Application } from "src/types";

const StyledMaximized = "cursor-pointer";

const Maximize = ({ app }: { app: Application }) => {
  const maximize = AppsService.useMaximize();

  return (
    <FiMaximize2
      size="16"
      className={StyledMaximized}
      onClick={() => maximize(app)}
    />
  );
};

export default Maximize;
