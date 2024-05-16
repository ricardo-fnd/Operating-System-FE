import { useEffect } from "react";

import type { UseOnClickOutside } from "./types";

const useOnClickOutside = ({ ref, handler }: UseOnClickOutside) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!target || !target.isConnected) return;

      const isOutside = ref.current && !ref.current.contains(target);
      if (isOutside) handler(event);
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
};

export default useOnClickOutside;
