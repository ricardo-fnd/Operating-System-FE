import Minimize from "./Minimize";
import Maximize from "./Maximize";
import Close from "./Close";

import type { ButtonsProps } from "../../types";

const StyledButtons = "flex items-center gap-2 cursor-default";

const Buttons = ({ app }: ButtonsProps) => (
  <div className={StyledButtons}>
    <Minimize app={app} />
    <Maximize app={app} />
    <Close app={app} />
  </div>
);

export default Buttons;
