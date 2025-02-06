import { Input } from "src/shared/components";
import { FaMagnifyingGlass } from "react-icons/fa6";

import { useLabels } from "src/services/client";

import type { SearchBarInput } from "./types";

const StyledInputContainer = "relative w-full";
const StyledInput =
  "[&>input]:h-16 [&>input]:pr-4 [&>input]:pl-14 [&>input]:rounded-lg [&>input]:text-2xl [&>input]:text-neutral-200 [&>input]:bg-neutral-900/[0.9] [&>input]:border-[1px] [&>input]:border-neutral-700 data-[results=true]:[&>input]:rounded-b-none";
const StyledIcon = "absolute top-1/2 -translate-y-1/2 left-4 text-white";

const SearchBarInput = ({ onChange, hasResults }: SearchBarInput) => {
  const getLabel = useLabels();

  return (
    <div className={StyledInputContainer}>
      <Input
        autoFocus
        autoComplete="off"
        onChange={onChange}
        name="search-bar-input"
        className={StyledInput}
        data-results={hasResults}
        placeholder={getLabel("search-bar.label")}
      />
      <FaMagnifyingGlass size={24} className={StyledIcon} />
    </div>
  );
};

export default SearchBarInput;
