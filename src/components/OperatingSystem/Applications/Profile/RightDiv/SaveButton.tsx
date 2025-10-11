import { Button } from "src/shared/components";

import { useLabels } from "src/services/client";

import type { ButtonProps } from "src/shared/components";

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
