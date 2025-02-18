import { twMerge } from "tailwind-merge";
import { Tooltip as ReactTooltip } from "react-tooltip";

import type { ITooltip } from "react-tooltip";

const StyledTooltip = "p-4 text-sm bg-black text-white z-50";

const Tooltip = ({ className, ...props }: ITooltip) => {
  const style = twMerge(StyledTooltip, className);

  return (
    <ReactTooltip
      place="bottom"
      className={style}
      disableStyleInjection
      {...props}
    />
  );
};

export default Tooltip;
