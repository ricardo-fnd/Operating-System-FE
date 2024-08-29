import type { Application } from "src/applications";
import type { KeyboardEvent } from "react";

type SearchBarInputProps = {
  onChange: (query: string) => void;
  hasResults: boolean;
};

type SearchBarResultsProps = {
  results: Application[];
  closeSearch: () => void;
};

export type { SearchBarInputProps, SearchBarResultsProps };
