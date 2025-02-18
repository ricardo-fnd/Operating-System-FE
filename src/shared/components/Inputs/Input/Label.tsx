import HelpTooltip from "../../HelpTooltip";

import type { LabelProps } from "../types";

const StyledContainer = "flex gap-2";
const StyledLabel = "data-[has-icon=true]:pl-1.5 text-gray-600 text-sm";

const Label = ({ label, name, tooltipLabel, hasIcon }: LabelProps) => {
  const showTooltip = !!tooltipLabel;

  return (
    <div className={StyledContainer}>
      <label data-has-icon={hasIcon} className={StyledLabel} htmlFor={name}>
        {label}
      </label>
      {showTooltip && (
        <HelpTooltip id={`${name}-input-tooltip`} labelKey={tooltipLabel} />
      )}
    </div>
  );
};

export default Label;
