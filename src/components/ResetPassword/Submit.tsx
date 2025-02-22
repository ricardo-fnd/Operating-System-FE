import { Button } from "src/shared/components/Buttons";

import { useLabels } from "src/services/client";

import type { ButtonProps } from "src/shared/components/Buttons";

const StyledButton =
  "px-10 border !bg-transparent !text-white transition-scale duration-300 hover:scale-105";

const Submit = ({ disabled, ...props }: ButtonProps) => {
  const getLabel = useLabels();

  return (
    <Button {...props} disabled={disabled} className={StyledButton}>
      {getLabel("reset-password.submit")}
    </Button>
  );
};

export default Submit;
