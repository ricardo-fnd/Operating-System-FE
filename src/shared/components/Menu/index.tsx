import { useRef } from "react";
import { twMerge } from "tailwind-merge";

import MenuOption from "./MenuOption";

import { useOnClickOutside } from "src/hooks";

import type { MenuHTMLAttributes, ReactNode } from "react";

type Props = MenuHTMLAttributes<HTMLMenuElement> & {
  close: () => void;
  options?: { ignore: string[] };
};

const StyledMenu =
  "absolute bottom-8 right-0 h-fit overflow-hidden text-sm bg-zinc-800 text-gray-200 rounded-md";

const Menu = ({ children, close, className, options, ...props }: Props) => {
  const ref = useRef<HTMLMenuElement>(null);

  useOnClickOutside({ ref, handler: close, options });
  const style = twMerge(StyledMenu, className);

  return (
    <menu ref={ref} className={style} {...props}>
      {children}
    </menu>
  );
};

export default Menu;
export { MenuOption };
