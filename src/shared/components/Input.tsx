import type { ChangeEvent, InputHTMLAttributes } from "react";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  onChange: (
    value: ChangeEvent<HTMLInputElement>["currentTarget"]["value"]
  ) => void;
  label?: string;
};

const StyledContainer = "flex flex-col gap-1.5 w-full";
const StyledInput = "text-black rounded-sm py-1 px-2";

const Input = ({ className, onChange, name, label, ...props }: Props) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <div className={`${StyledContainer} ${className}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        className={StyledInput}
        onChange={onInputChange}
        {...props}
      />
    </div>
  );
};

export default Input;
