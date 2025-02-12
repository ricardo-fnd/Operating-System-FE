import Button from "./Button";

import { useLabels } from "src/services/client";

import type { ButtonProps } from "./Button";

const Continue = (props: Omit<ButtonProps, "color" | "children">) => {
  const getLabel = useLabels();

  return (
    <Button color="blue" {...props}>
      <p>{getLabel("commons.continue")}</p>
    </Button>
  );
};

export default Continue;
