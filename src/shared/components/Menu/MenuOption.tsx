import { twMerge } from "tailwind-merge";

import type { LiHTMLAttributes } from "react";

const StyledOption =
  "flex gap-1.5 items-center py-1.5 px-3 text-nowrap cursor-pointer hover:bg-zinc-700";

const MenuOption = ({
  children,
  className,
  ...props
}: LiHTMLAttributes<HTMLLIElement>) => {
  const style = twMerge(StyledOption, className);

  return (
    <li className={style} {...props}>
      {children}
    </li>
  );
};

export default MenuOption;
