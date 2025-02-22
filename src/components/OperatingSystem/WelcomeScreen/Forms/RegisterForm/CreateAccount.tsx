import { Button } from "src/shared/components/Buttons";

import { useLabels } from "src/services/client";

import type { ButtonProps } from "src/shared/components/Buttons";

const StyledButton =
  "mt-12 px-10 border !bg-transparent !text-white transition-scale duration-300 hover:scale-105";

const CreateAccount = ({ disabled, ...props }: ButtonProps) => {
  const getLabel = useLabels();

  return (
    <Button {...props} disabled={disabled} className={StyledButton}>
      {getLabel("user-login.create-account")}
    </Button>
  );
};

export default CreateAccount;
