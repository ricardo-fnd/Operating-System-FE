import Minimize from "./Minimize";
import Maximize from "./Maximize";
import Close from "./Close";

import type { Application } from "src/types";

const StyledButtons = "flex items-center gap-2 cursor-default";

const Buttons = ({ app }: { app: Application }) => (
  <div className={StyledButtons}>
    <Minimize app={app} />
    <Maximize app={app} />
    <Close app={app} />
  </div>
);

export default Buttons;
