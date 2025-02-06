import { DOMAIN_URL } from "src/env-variables";
import fetch from "./fetch";

import type { SearchGoogleParams } from "./request-types";
import type { GoogleResults } from "./response-types";
import type { GoogleSearchResults } from "src/types";

const RESULTS_PER_PAGE = 10;

const search = async ({ query, page }: SearchGoogleParams) => {
  const URL = `${DOMAIN_URL}/api/google-search?query=${query}&page=${page}`;
  const data = await fetch<GoogleResults>(URL);

  return data ? toSearchResult(data) : null;
};

export { search };

const toSearchResult = (result: GoogleResults): GoogleSearchResults => ({
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
