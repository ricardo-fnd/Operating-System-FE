import { Button } from "src/shared/components/Buttons";

import { useLabels } from "src/services/client";

import type { ButtonProps } from "src/shared/components/Buttons/Button";

const StyledButton = "self-end";

const SaveButton = (props: ButtonProps) => {
  const getLabel = useLabels();

  return (
    <Button color="blue" className={StyledButton} {...props}>
      <p>{getLabel("commons.save")}</p>
    </Button>
  );
};

export default SaveButton;
