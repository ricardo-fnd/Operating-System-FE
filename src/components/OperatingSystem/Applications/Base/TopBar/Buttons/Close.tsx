import { AiFillCloseCircle } from "react-icons/ai";

import { AppsService } from "src/services";

import type { Application } from "src/types";

const StyledClose = "cursor-pointer";

const Close = ({ app }: { app: Application }) => {
  const close = AppsService.useClose();

  return (
    <AiFillCloseCircle
      size="20"
      color="tomato"
      className={StyledClose}
      onClick={() => close(app)}
    />
  );
};

export default Close;
