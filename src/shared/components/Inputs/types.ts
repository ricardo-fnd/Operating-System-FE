import type { ChangeEvent, InputHTMLAttributes } from "react";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  onChange: (e: string) => void;
  name: string;
  onEnterKey?: (value: InputHTMLAttributes<HTMLInputElement>["value"]) => void;
  label?: string;
  tooltipLabel?: string;
  icon?: string;
  validations?: ((value: string) => boolean)[];
};

type BaseInput = Omit<InputProps, "onChange"> & {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

type BaseCheckbox = Omit<InputProps, "onChange"> & {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

type LabelProps = {
  label?: string;
  name: string;
  hasIcon: boolean;
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
