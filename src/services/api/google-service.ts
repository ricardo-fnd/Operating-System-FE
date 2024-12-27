import { DOMAIN_URL } from "src/env-variables";
import fetch from "./fetch";

import type { SearchGoogleProps } from "./types";
import type { GoogleResults, SearchResultsProps } from "./response-types";

const RESULTS_PER_PAGE = 10;

const search = async ({ query, page }: SearchGoogleProps) => {
  const URL = `${DOMAIN_URL}/api/google-search?query=${query}&page=${page}`;
  const data = await fetch(URL);

  return toSearchResult(data);
};

export { search };

const toSearchResult = (result: GoogleResults): SearchResultsProps => ({
  data: result.items.map((result) => ({
    title: result.title,
    link: result.formattedUrl,
    domain: result.displayLink,
    description: result.htmlSnippet,
  })),
  metadata: {
    searchTime: result.searchInformation.searchTime,
    total: result.searchInformation.formattedTotalResults,
    maxPages:
      parseInt(result.searchInformation.totalResults) / RESULTS_PER_PAGE,
    page:
      result.queries.request[0].startIndex === 1
        ? 1
        : parseInt(result.queries.request[0].startIndex.toString()[0]) + 1,
  },
});
