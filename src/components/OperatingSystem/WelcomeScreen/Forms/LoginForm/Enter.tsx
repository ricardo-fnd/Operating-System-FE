import { Button } from "src/shared/components/Buttons";

import { useLabels } from "src/services/client";

import type { ButtonProps } from "src/shared/components/Buttons";

const StyledButton =
  "mt-20 px-16 py-1.5 border !bg-transparent !text-white transition-scale duration-300 hover:scale-105";

const Enter = (props: ButtonProps) => {
  const getLabel = useLabels();

  return (
    <Button {...props} className={StyledButton}>
      {getLabel("user-login.enter")}
    </Button>
  );
};

export default Enter;
