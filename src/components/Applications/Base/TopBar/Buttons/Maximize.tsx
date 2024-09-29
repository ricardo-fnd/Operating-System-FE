import { FiMaximize2 } from "react-icons/fi";

import { AppsService } from "src/services";

import type { MinimizeButton } from "../../types";

const StyledMaximized = "cursor-pointer";

const Maximize = ({ app }: MinimizeButton) => {
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
