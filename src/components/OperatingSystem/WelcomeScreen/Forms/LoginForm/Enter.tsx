import { Button } from "src/shared/components/Buttons";

import { useLabels } from "src/services/client";

import type { ButtonProps } from "src/shared/components/Buttons";

const StyledButton =
  "mt-10 px-10 py-1.5 transition-scale duration-300 data-[disabled=false]:hover:scale-105";

const Enter = ({disabled, ...props}: ButtonProps) => {
  const getLabel = useLabels();

  return (
    <Button {...props} className={StyledButton} disabled={disabled} data-disabled={disabled}>
      {getLabel("commons.enter")}
    </Button>
  );
};

export default Enter;
