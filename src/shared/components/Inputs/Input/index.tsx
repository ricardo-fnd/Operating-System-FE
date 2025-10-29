import { forwardRef, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import Label from "./Label";
import ShowPasswordIcon from "./Icons/ShowPasswordIcon";

import type { KeyboardEvent } from "react";
import type { BaseInput } from "../types";

const StyledContainer =
  "relative flex flex-col w-full data-[disabled=true]:opacity-60";
const StyledInput = `w-full p-3 text-sm border-b-2 border-gray-300 text-gray-800 bg-transparent disabled:cursor-not-allowed
  [&[type="password"]]:pr-8
  data-[is-valid=true]:border-green-400 data-[is-valid=false]:border-red-400
  data-[theme="dark"]:border-gray-400 data-[theme="dark"]:text-slate-200 data-[theme="dark"]:placeholder:text-gray-400`;

const BaseInput = forwardRef<HTMLInputElement, BaseInput>(
  ({
    theme,
    name,
    type,
    label,
    value,
    disabled,
    className,
    onEnterKey,
    tooltipLabel,
    validations,
    ...props
  }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const [hasRendered, setHasRendered] = useState(false);
    const [isValid, setIsValid] = useState<boolean | null>(null);

    useEffect(() => {
      if (!hasRendered) return setHasRendered(true);
      setIsValid(validations?.every((isValid) => isValid(value)) ?? null);
    }, [value]);

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && onEnterKey) onEnterKey(value);
    };

    const style = twMerge(StyledContainer, className);

    return (
      <div data-disabled={disabled} className={style}>
        {label && (
          <Label
            name={name}
            label={label}
            theme={theme}
            tooltipLabel={tooltipLabel}
          />
        )}
        <input
          ref={ref}
          id={name}
          name={name}
          value={value}
          disabled={disabled}
          onKeyDown={onKeyDown}
          data-theme={theme}
          className={StyledInput}
          data-is-valid={isValid}
          type={type && !showPassword ? type : "text"}
          {...props}
        />
        {type === "password" && (
          <ShowPasswordIcon showing={showPassword} setShow={setShowPassword} />
        )}
      </div>
    );
  }
);

BaseInput.displayName = 'BaseInput';

export default BaseInput;
