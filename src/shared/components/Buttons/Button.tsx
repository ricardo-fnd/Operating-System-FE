import { twMerge } from "tailwind-merge";

import Loading from "../Loading";

import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  color?: "white" | "orange" | "blue" | "zinc";
};

const StyledButton = `relative flex justify-center items-center gap-1.5 w-fit px-4 py-1 text-sm text-white rounded-full shadow-md transition-hover duration-300 disabled:cursor-not-allowed disabled:opacity-50
  first:data-[loading=true]:invisible
  data-[color="white"]:bg-white data-[color="white"]:text-gray-800 data-[color="white"]:hover:bg-gray-200 data-[color="white"]:disabled:hover:bg-white 
  data-[color="blue"]:bg-blue-600 data-[color="blue"]:hover:bg-blue-700 data-[color="blue"]:disabled:hover:bg-blue-600 
  data-[color="orange"]:bg-orange-400 data-[color="orange"]:hover:bg-orange-500 data-[color="orange"]:disabled:hover:bg-orange-400
  data-[color="zinc"]:bg-zinc-700 data-[color="zinc"]:hover:bg-zinc-600 data-[color="zinc"]:disabled:hover:bg-zinc-700`;
const StyledLoading =
  "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-5 fill-white";

const Button = ({
  color = "white",
  loading = false,
  children,
  className,
  ...props
}: ButtonProps) => {
  const style = twMerge(StyledButton, className);

  return (
    <button
      disabled={loading}
      data-loading={loading}
      data-color={color}
      className={style}
      {...props}
    >
      {children}
      {loading && <Loading className={StyledLoading} />}
    </button>
  );
};

export default Button;
