import { FaRegWindowMinimize } from "react-icons/fa";

import { AppsService } from "src/services";

import type { MinimizeButton } from "../../types";

const StyledMinimize = "cursor-pointer mt-0.5";

const Minimize = ({ app }: MinimizeButton) => {
  const minimize = AppsService.useMinimize();

  return (
    <FaRegWindowMinimize
      size="16"
      className={StyledMinimize}
      onClick={() => minimize(app)}
    />
  );
};

export default Minimize;
