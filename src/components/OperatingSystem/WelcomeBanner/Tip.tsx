
import { WarningIcon } from "src/shared/components";

import { useLabels } from "src/services/client";

import type { User } from "src/types";

const StyledTip = "flex gap-2 text-sm";

const Tip = ({ user }: { user: User }) => {
  const getLabel = useLabels();

  const label = user.email
    ? "welcome-banner.confirm-email"
    : "welcome-banner.add-email";

  return (
    <div className={StyledTip}>
      <WarningIcon color="#fd9a00" width={30} height={30} />
      <div dangerouslySetInnerHTML={{ __html: getLabel(label) }} />
    </div>
  );
};

export default Tip;
