import type { ChangeEvent, InputHTMLAttributes, KeyboardEvent } from "react";
import type { ITooltip } from "react-tooltip";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  onChange: (e: string) => void;
  name: string;
  onEnterKey?: (value: InputHTMLAttributes<HTMLInputElement>["value"]) => void;
  inputClassName?: string;
  label?: string;
};

type BaseInput = Omit<InputProps, "onChange"> & {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

type BaseCheckbox = Omit<InputProps, "onChange"> & {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

type PasswordTooltipProps = { className?: string; place?: ITooltip["place"] };

export type { InputProps, BaseInput, BaseCheckbox, PasswordTooltipProps };
