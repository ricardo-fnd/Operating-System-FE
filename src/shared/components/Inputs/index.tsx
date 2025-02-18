import Checkbox from "./Checkbox";
import BaseInput from "./Input";

import type { InputProps } from "./types";
import type { ChangeEvent } from "react";

const Input = ({ onChange, type, value, ...props }: InputProps) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  if (type === "checkbox") {
    return <Checkbox onChange={onInputChange} {...props} />;
  }

  return (
    <BaseInput
      type={type}
      value={value as string}
      onChange={onInputChange}
      {...props}
    />
  );
};

export type { InputProps };
export default Input;
