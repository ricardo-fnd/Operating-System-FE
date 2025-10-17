import { InfoIcon, ErrorIcon, SuccessIcon, WarningIcon } from "./Icons";

import type { IconProps } from "./types";

const StyledIcon = `flex-shrink-0
  data-[type="info"]:text-blue-400
  data-[type="error"]:text-red-400
  data-[type="success"]:text-green-400
  data-[type="warning"]:text-amber-400`;

const Icon = ({ type }: IconProps) => {
  const Icons = { info: InfoIcon, error: ErrorIcon, success: SuccessIcon, warning: WarningIcon }
  const IconComponent = Icons[type];

  return (
    <div data-type={type} className={StyledIcon}>
      <IconComponent />
    </div>
  );
};

export default Icon;

