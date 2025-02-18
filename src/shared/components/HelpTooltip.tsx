import { twMerge } from "tailwind-merge";

import Tooltip from "./Tooltip";

import { useLabels } from "src/services/client";

import type { ITooltip } from "react-tooltip";

type Props = {
  id: string;
  labelKey: string;
  className?: string;
  place?: ITooltip["place"];
};

const StyledHelp =
  "flex items-center justify-center min-w-5 min-h-1 rounded-full border text-xs cursor-default";
const StyledTooltip = "max-w-md";

const HelpTooltip = ({ id, className, labelKey }: Props) => {
  const getLabel = useLabels();

  const style = twMerge(StyledHelp, className);

  return (
    <>
      <div id={id} className={style}>
        ?
      </div>
      <Tooltip id={`#${id}`} anchorSelect={`#${id}`} className={StyledTooltip}>
        <p>{getLabel(labelKey)}</p>
      </Tooltip>
    </>
  );
};

export default HelpTooltip;
