import { twMerge } from "tailwind-merge";

import { LoadingIcon } from "../Icons";

import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  color?: "white" | "orange" | "blue" | "zinc" | "red" | "green" | "yellow";
};

const StyledButton = `relative flex justify-center items-center gap-1.5 w-fit px-4 py-1 text-sm text-white border rounded-full shadow-md transition-hover duration-300 disabled:cursor-not-allowed disabled:opacity-50
  first:data-[loading=true]:invisible
  data-[color="white"]:bg-white data-[color="white"]:text-gray-800 data-[color="white"]:hover:bg-gray-200 data-[color="white"]:disabled:hover:bg-white 
  data-[color="blue"]:bg-blue-600 data-[color="blue"]:border-white/25 data-[color="blue"]:hover:bg-blue-700 data-[color="blue"]:disabled:hover:bg-blue-600 
  data-[color="orange"]:bg-orange-400 data-[color="orange"]:hover:bg-orange-500 data-[color="orange"]:disabled:hover:bg-orange-400
  data-[color="red"]:bg-red-400 data-[color="red"]:hover:bg-red-500 data-[color="red"]:disabled:hover:bg-red-400
  data-[color="green"]:bg-green-400 data-[color="green"]:hover:bg-green-500 data-[color="green"]:disabled:hover:bg-green-400
  data-[color="yellow"]:bg-yellow-400 data-[color="yellow"]:hover:bg-yellow-500 data-[color="yellow"]:disabled:hover:bg-yellow-400
  data-[color="zinc"]:bg-zinc-900/75 data-[color="zinc"]:hover:bg-zinc-800 data-[color="zinc"]:border-zinc-600 data-[color="zinc"]:disabled:hover:bg-zinc-900/75`;
const StyledLoading =
  "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2";

const Button = ({
  color,
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
      {loading && <LoadingIcon width={28} height={28} color="#ffffff" className={StyledLoading} />}
    </button>
  );
};

export default Button;
