import HelpTooltip from "../../HelpTooltip";

import type { LabelProps } from "../types";

const StyledContainer = "flex gap-2 text-gray-600 text-sm data-[theme='dark']:text-slate-200";

const Label = ({ label, name, tooltipLabel, theme }: LabelProps) => {
  const showTooltip = !!tooltipLabel;

  return (
    <div className={StyledContainer} data-theme={theme} >
      <label htmlFor={name}>
        {label}
      </label>
      {showTooltip && (
        <HelpTooltip id={`${name}-input-tooltip`} labelKey={tooltipLabel} />
      )}
    </div>
  );
};

export default Label;
