import { RefObject } from "react";

type UseOnClickOutside = {
  ref: RefObject<HTMLElement>;
  handler: (event: MouseEvent) => void;
  options?: { ignore: string[] };
};

export type { UseOnClickOutside };
