import { useEffect, useState } from "react";

import { useLabels } from "src/services/client";
import { AppsService } from "src/services";

import type { Application } from "src/types";
import type { SearchBarResults } from "./types";

// SEARCH_BAR_INPUT_HEIGHT = 64px
const StyledResultsContainer =
  "absolute top-[64px] left-0 flex flex-col w-full h-[30vh] p-2 overflow-auto rounded-b-lg bg-neutral-900/[0.9] border-[1px] border-neutral-700 z-10 md:show-y-scrollbar";
const StyledResult =
  "w-full py-2 px-3 cursor-pointer text-white text-sm rounded-lg data-[selected=true]:bg-neutral-700";

const Results = ({ closeSearch, results }: SearchBarResults) => {
  const getLabel = useLabels();
  const { selected, onResultClick, setSelected } = useController({
    closeSearch,
    results,
  });

  return (
    <div className={StyledResultsContainer}>
      {results.map((app, index) => (
        <p
          key={app.id}
          className={StyledResult}
          onClick={() => onResultClick({ app })}
          data-selected={selected === index + 1}
          onMouseEnter={() => setSelected(index + 1)}
        >
          {getLabel(app.name)}
        </p>
      ))}
    </div>
  );
};

const useController = ({ closeSearch, results }: SearchBarResults) => {
  const [selected, setSelected] = useState(0);
  const open = AppsService.useOpen();

  const onResultClick = ({ app }: { app: Application }) => {
    open(app);
    closeSearch();
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const { key } = event;

      setSelected((prev) => {
        const canNavigateDown = prev < results.length;
        const canNavigateUp = prev > 1;

        if (key === "ArrowDown" && canNavigateDown) return prev + 1;
        if (key === "ArrowUp" && canNavigateUp) return prev - 1;
        if (key === "Enter") onResultClick({ app: results[prev - 1] });
        return prev;
      });
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return { setSelected, selected, onResultClick };
};

export default Results;
