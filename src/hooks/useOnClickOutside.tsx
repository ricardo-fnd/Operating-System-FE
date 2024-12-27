import { useEffect } from "react";

import type { UseOnClickOutside } from "./types";

const useOnClickOutside = ({ ref, handler, options }: UseOnClickOutside) => {
  useEffect(() => {
    const containsElement = (target: Node, id: string) => {
      const element = document.getElementById(id);
      if (!element) return false;

      return element.contains(target);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!target || !target.isConnected) return;

      const idToIgnore = options?.ignore.find((id) =>
        containsElement(target, id)
      );
      if (idToIgnore) return;

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
