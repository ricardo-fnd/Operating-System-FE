import type { ChangeEvent, CSSProperties, InputHTMLAttributes } from "react";

type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "style"
> & {
  theme?: "light" | "dark";
  onChange: (e: string) => void;
  name: string;
  onEnterKey?: (value: InputHTMLAttributes<HTMLInputElement>["value"]) => void;
  label?: string;
  tooltipLabel?: string;
  validations?: ((value: string) => boolean)[];
  style?: CSSProperties & { "--autofill-text-color": string };
};

type BaseInput = Omit<InputProps, "onChange"> & {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

type BaseCheckbox = Omit<InputProps, "onChange"> & {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

type LabelProps = {
  theme?: "light" | "dark";
  label?: string;
  name: string;
  tooltipLabel?: string;
};

type ShowPasswordIcon = { showing: boolean; setShow: (show: boolean) => void };

export type {
  InputProps,
  BaseInput,
  BaseCheckbox,
  ShowPasswordIcon,
  LabelProps,
};
