import { Button, Tooltip, EditIcon } from "src/shared/components";

import { useLabels } from "src/services/client";

import type { EditButton } from "../../types";

const StyledButton = "absolute bottom-4 right-4 p-1.5 rounded-xl data-[editing=true]:bg-orange-500";
const StyledText = "text-sm";

const EditButton = ({ editing, user, ...props }: EditButton) => {
  const getLabel = useLabels();

  const id = "edit-btn";
  const disabled = user.guest || !user.emailConfirmed;

  let tooltipLabel = "";
  if (user.guest) {
    tooltipLabel = "user-profile.guest-edit";
  } else if (!user.emailConfirmed) {
    tooltipLabel = "user-profile.no-confirmation-edit";
  }

  return (
    <>
      <Button
        id={id}
        color="orange"
        disabled={disabled}
        data-editing={editing}
        className={StyledButton}
        {...props}
      >
        <EditIcon color="white" />
      </Button>
      {disabled && (
        <Tooltip
          noArrow
          delayShow={300}
          id={`${id}-tooltip`}
          anchorSelect={`#${id}`}
        >
          <p className={StyledText}>{getLabel(tooltipLabel)}</p>
        </Tooltip>
      )}
    </>
  );
};

export default EditButton;
