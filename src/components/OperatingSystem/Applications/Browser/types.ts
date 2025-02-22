import { GoogleSearchResults } from "src/types";

type EnterUrl = { search: () => void; loading: boolean };
type Content = { setLoading: (loading: boolean) => void };
type Website = { setLoading: (loading: boolean) => void; url: string };
type SearchEngine = {
  setLoading: (boolean: boolean) => void;
  query: string;
};

type SearchEnginePagination = {
  setPage: (page: number) => void;
  metadata: GoogleSearchResults["metadata"];
  isFetching: boolean;
};

type SearchEngineFooter = {
  metadata: GoogleSearchResults["metadata"];
};

type SearchEngineResults = {
  result: GoogleSearchResults["data"][0];
};

export type {
  EnterUrl,
  Content,
  Website,
  SearchEngine,
  SearchEnginePagination,
  SearchEngineFooter,
  SearchEngineResults,
};
