import type { Application } from "src/types";

type SearchBarInput = {
  onChange: (query: string) => void;
  hasResults: boolean;
};

type SearchBarResults = {
  results: Application[];
  closeSearch: () => void;
};

export type { SearchBarInput, SearchBarResults };
