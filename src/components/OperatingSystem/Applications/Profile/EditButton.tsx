import Image from "next/image";

import { Button } from "src/shared/components/Buttons";
import edit from "public/user-profile/edit.svg";
import { Tooltip } from "src/shared/components";

import { useLabels } from "src/services/client";

import type { ButtonProps } from "src/shared/components/Buttons";

const StyledButton = "absolute top-6 right-10 p-1.5 rounded-xl";
const StyledText = "text-sm";

const EditButton = ({ disabled, ...props }: ButtonProps) => {
  const getLabel = useLabels();

  const id = "edit-btn";

  return (
    <>
      <Button
        id={id}
        color="orange"
        disabled={disabled}
        className={StyledButton}
        {...props}
      >
        <Image src={edit} width={20} height={20} alt="edit" />
      </Button>
      {disabled && (
        <Tooltip
          noArrow
          delayShow={300}
          id={`${id}-tooltip`}
          anchorSelect={`#${id}`}
        >
          <p className={StyledText}>{getLabel("user-profile.guest-edit")}</p>
        </Tooltip>
      )}
    </>
  );
};

export default EditButton;
