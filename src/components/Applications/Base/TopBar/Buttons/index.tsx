import Close from "./Close";
import Minimize from "./Minimize";

import type { ButtonsProps } from "../../types";

const StyledButtons = "flex items-center gap-1";

const Buttons = ({ appId }: ButtonsProps) => (
  <div className={StyledButtons}>
    <Minimize appId={appId} />
    <Close appId={appId} />
  </div>
);

export default Buttons;
