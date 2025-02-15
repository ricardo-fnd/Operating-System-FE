import { twMerge } from "tailwind-merge";

import Tooltip from "../Tooltip";

import { useLabels } from "src/services/client";

import type { PasswordTooltipProps } from "./types";

const StyledHelp =
  "absolute top-1 right-0 flex items-center justify-center min-w-4 min-h-1 rounded-full bg-blue-500 text-white text-xs";
const StyledTooltip = "max-w-md";

const PasswordTooltip = ({
  className,
  place = "bottom",
}: PasswordTooltipProps) => {
  const getLabel = useLabels();

  const id = "password-help";
  const style = twMerge(StyledHelp, className);

  return (
    <>
      <div id={id} className={style}>
        ?
      </div>
      <Tooltip
        place={place}
        id={`#${id}`}
        anchorSelect={`#${id}`}
        className={StyledTooltip}
      >
        <p>{getLabel("commons.password-tooltip")}</p>
      </Tooltip>
    </>
  );
};

export default PasswordTooltip;
