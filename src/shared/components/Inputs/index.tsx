import { forwardRef } from "react";

import Checkbox from "./Checkbox";
import BaseInput from "./Input";

import type { InputProps } from "./types";
import type { ChangeEvent } from "react";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, type, value, ...props }, ref) => {
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.currentTarget.value);
    };

    if (type === "checkbox") {
      return <Checkbox onChange={onInputChange} {...props} />;
    }

    return (
      <BaseInput
        ref={ref}
        type={type}
        value={value as string}
        onChange={onInputChange}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export type { InputProps };
export default Input;
