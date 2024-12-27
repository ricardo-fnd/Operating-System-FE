import type { ChangeEvent, InputHTMLAttributes, KeyboardEvent } from "react";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  onChange: (
    value: ChangeEvent<HTMLInputElement>["currentTarget"]["value"]
  ) => void;
  onEnterKey?: (value: InputHTMLAttributes<HTMLInputElement>["value"]) => void;
  label?: string;
};

const StyledContainer = "flex flex-col gap-1.5 w-full";
const StyledInput = "text-black rounded-sm py-1 px-2";

const Input = ({
  name,
  label,
  value,
  className,
  onChange,
  onEnterKey,
  ...props
}: Props) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnterKey) onEnterKey(value);
  };

  return (
    <div className={`${StyledContainer} ${className}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        value={value}
        onKeyDown={onKeyDown}
        className={StyledInput}
        onChange={onInputChange}
        {...props}
      />
    </div>
  );
};

export default Input;
