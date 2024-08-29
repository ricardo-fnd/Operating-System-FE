import { useEffect, useState } from "react";

import SearchBarInput from "./Input";
import Results from "./Results";

import { useApps } from "src/context";
import { useLabels } from "src/services/client";

import type { Application } from "src/applications";

const StyledOverlay =
  "absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/75 z-50";
const StyledSearchBar =
  "absolute top-[20%] -translate-y-[20%] left-1/2 -translate-x-1/2 flex flex-col w-10/12 max-w-[660px] md:w-1/2";

const SearchBar = () => {
  const { showSearchBar, close, setQuery, results } = useController();

  if (!showSearchBar) return null;

  const hasResults = results.length > 0;

  return (
    <div className={StyledOverlay}>
      <div className={StyledSearchBar}>
        <SearchBarInput onChange={setQuery} hasResults={hasResults} />
        {hasResults && <Results results={results} closeSearch={close} />}
      </div>
    </div>
  );
};

const useController = () => {
  const apps = useApps();
  const getLabel = useLabels();
  const [query, setQuery] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [results, setResults] = useState<Application[]>([]);

  const open = () => setShowSearchBar(true);
  const close = () => {
    setResults([]);
    setShowSearchBar(false);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const { key, ctrlKey, metaKey } = event;

      if ((ctrlKey || metaKey) && key === "k") open();
      if (key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!query) return setResults([]);

    const results = apps.filter(({ name }) => {
      const appName = getLabel(name).toLowerCase();
      return appName.startsWith(query.toLowerCase().trim());
    });

    setResults(results);
  }, [query]);

  return { showSearchBar, close, setQuery, results };
};

export default SearchBar;
