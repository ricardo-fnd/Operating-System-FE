import { FaRegWindowMinimize } from "react-icons/fa";

import { AppsService } from "src/services";

import type { Application } from "src/types";

const StyledMinimize = "cursor-pointer mt-0.5";

const Minimize = ({ app }: { app: Application }) => {
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
