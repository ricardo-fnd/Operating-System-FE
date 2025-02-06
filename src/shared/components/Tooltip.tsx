import { Tooltip as ReactTooltip } from "react-tooltip";

import type { ITooltip } from "react-tooltip";

const Tooltip = (props: ITooltip) => (
  <ReactTooltip disableStyleInjection {...props} />
);

export default Tooltip;
