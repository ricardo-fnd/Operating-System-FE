import type { ChangeEvent, InputHTMLAttributes, KeyboardEvent } from "react";

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

export type { InputProps, BaseInput, BaseCheckbox };
