import { Tooltip as ReactTooltip } from "react-tooltip";

import type { ITooltip } from "react-tooltip";

const Tooltip = (props: ITooltip) => (
  <ReactTooltip disableStyleInjection place="bottom" {...props} />
);

export default Tooltip;
