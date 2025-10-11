import { Button } from "src/shared/components";

import { useLabels } from "src/services/client";

import type { ButtonProps } from "src/shared/components";

const StyledButton = "px-12 py-2 w-full";

const Submit = ({ disabled, ...props }: ButtonProps) => {
  const getLabel = useLabels();

  return (
    <Button {...props} disabled={disabled} className={StyledButton}>
      {getLabel("reset-password.submit")}
    </Button>
  );
};

export default Submit;
