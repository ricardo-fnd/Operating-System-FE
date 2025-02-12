import type { ReactNode } from "react";

export type ButtonProps = {
  color: "blue";
  onClick: () => void;
  children: ReactNode;
};

const StyledContinueButton = `px-4 py-2 text-white rounded-lg 
  data-[color="blue"]:bg-blue-600 data-[color="blue"]:hover:bg-blue-700`;

const Button = ({ color, onClick, children }: ButtonProps) => (
  <button data-color={color} className={StyledContinueButton} onClick={onClick}>
    {children}
  </button>
);

export default Button;
