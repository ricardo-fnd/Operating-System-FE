import { useRef } from "react";

import { Input, MagnifyingGlassIcon } from "src/shared/components";

import { useLabels } from "src/services/client";
import { useOnClickOutside } from "src/hooks";

import type { SearchBarInput } from "./types";

const StyledInputContainer = "relative w-full";
const StyledInput =
  "[&>input]:h-16 [&>input]:pr-4 [&>input]:pl-14 [&>input]:rounded-lg [&>input]:text-2xl [&>input]:text-slate-200 [&>input]:bg-zinc-900 [&>input]:border [&>input]:border-zinc-600 data-[results=true]:[&>input]:rounded-b-none";
const StyledIcon = "absolute top-1/2 -translate-y-1/2 left-4";

const SearchBarInput = ({ close, onChange, hasResults }: SearchBarInput) => {
  const ref = useRef<HTMLDivElement>(null);
  const getLabel = useLabels();

  const options = { ignore: ["search-bar-input", "search-bar-results"] };
  useOnClickOutside({ ref, handler: close, options });
  
  return (
    <div className={StyledInputContainer} ref={ref} id="search-bar-input">
      <Input
        autoFocus
        autoComplete="off"
        onChange={onChange}
        name="search-bar-input"
        className={StyledInput}
        data-results={hasResults}
        placeholder={getLabel("search-bar.label")}
      />
      <MagnifyingGlassIcon className={StyledIcon} width={28} height={28} color="white" />
    </div>
  );
};

export default SearchBarInput;
