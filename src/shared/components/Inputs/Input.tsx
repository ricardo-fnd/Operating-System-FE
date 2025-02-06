import { twMerge } from "tailwind-merge";

import type { KeyboardEvent } from "react";
import type { BaseInput } from "./types";

const StyledContainer = "flex flex-col gap-1.5 w-full";
const StyledInput =
  "w-full p-2.5 border-2 border-gray-300 text-gray-900 text-sm bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500";

const BaseInput = ({
  name,
  label,
  value,
  type,
  className,
  inputClassName,
  onEnterKey,
  ...props
}: BaseInput) => {
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnterKey) onEnterKey(value);
  };

  const style = twMerge(StyledContainer, className);
  const inputStyle = twMerge(StyledInput, inputClassName);

  return (
    <div className={style}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        value={value}
        onKeyDown={onKeyDown}
        className={inputStyle}
        type={type ? type : "text"}
        {...props}
      />
    </div>
  );
};

export default BaseInput;
