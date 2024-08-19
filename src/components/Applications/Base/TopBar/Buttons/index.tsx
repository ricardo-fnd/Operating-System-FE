import Minimize from "./Minimize";
import Maximize from "./Maximize";
import Close from "./Close";

import type { ButtonsProps } from "../../types";

const StyledButtons = "flex items-center gap-2 cursor-default";

const Buttons = ({ appId }: ButtonsProps) => (
  <div className={StyledButtons}>
    <Minimize appId={appId} />
    <Maximize appId={appId} />
    <Close appId={appId} />
  </div>
);

export default Buttons;
