import { Button } from "src/shared/components";

import { useLabels } from "src/services/client";

import type { ButtonProps } from "src/shared/components";

const StyledButton =
  "mt-10 px-10 py-1.5 transition-scale duration-300 data-[disabled=false]:hover:scale-105";

const Enter = ({disabled, ...props}: ButtonProps) => {
  const getLabel = useLabels();

  return (
    <Button {...props} className={StyledButton} disabled={disabled} data-disabled={disabled}>
      <p>{getLabel("commons.enter")}</p>
    </Button>
  );
};

export default Enter;
