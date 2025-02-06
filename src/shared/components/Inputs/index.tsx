import Checkbox from "./Checkbox";
import BaseInput from "./Input";

import type { InputProps } from "./types";
import type { ChangeEvent } from "react";

const Input = ({ onChange, type, ...props }: InputProps) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  if (type === "checkbox") {
    return <Checkbox onChange={onInputChange} {...props} />;
  }

  return <BaseInput type={type} onChange={onInputChange} {...props} />;
};

export default Input;
