import { Button } from "src/shared/components/Buttons";

import { useLabels } from "src/services/client";

import type { Submit } from "../types";

const StyledButton = "w-full py-2";

const Submit = ({ label, ...props }: Submit) => {
  const getLabel = useLabels();

  return (
    <Button {...props} className={StyledButton}>
      <p>{getLabel(label)}</p>
    </Button>
  );
};

export default Submit;
