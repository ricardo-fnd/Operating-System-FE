import { RefObject } from "react";

type UseOnClickOutside = {
  ref: RefObject<HTMLElement>;
  handler: (event: MouseEvent) => void;
};

export type { UseOnClickOutside };
