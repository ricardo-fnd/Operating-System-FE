import Image from "next/image";

import guestSvg from "public/user-login/guest.svg";
import { Tooltip } from "src/shared/components";
import { Button } from "src/shared/components/Buttons";

import { useLabels } from "src/services/client";

const StyledGuest =
  "relative flex flex-col items-center gap-4 text-lg p-2 font-medium cursor-pointer transition-scale duration-300 hover:scale-105";
const StyledTooltip = "flex flex-col gap-3 items-center max-w-72 text-center";

const Guest = ({ onClick }: { onClick: () => void }) => {
  const getLabel = useLabels();
  const tooltipId = "guest-user-warning";

  return (
    <>
      <div id={tooltipId} className={StyledGuest}>
        <Image
          width={90}
          height={90}
          src={guestSvg}
          alt={getLabel("user-login.guest")}
        />
        <p>{getLabel("user-login.guest")}</p>
      </div>
      <Tooltip
        clickable
        openOnClick
        className={StyledTooltip}
        anchorSelect={`#${tooltipId}`}
      >
        <p>{getLabel("user-login.guest.warning")}</p>
        <Button onClick={onClick}>
          <p>{getLabel("user-login.guest.enter")}</p>
        </Button>
      </Tooltip>
    </>
  );
};

export default Guest;
