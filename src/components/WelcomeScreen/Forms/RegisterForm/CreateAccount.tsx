import { Button } from "src/shared/components";

import { useLabels } from "src/services/client";

import type { ButtonProps } from "src/shared/components";

const StyledButton =
  "mt-4 px-10 border transition-scale duration-300 data-[disabled=false]:hover:scale-105";

const CreateAccount = ({ disabled, ...props }: ButtonProps) => {
  const getLabel = useLabels();

  return (
    <Button {...props} disabled={disabled} data-disabled={disabled} className={StyledButton}>
      {getLabel("user-login.create-account")}
    </Button>
  );
};

export default CreateAccount;
