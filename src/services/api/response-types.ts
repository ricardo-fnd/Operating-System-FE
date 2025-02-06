export type ApiError = {
  detail: string;
};

type GoogleResultsQueryPage = {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
};

export type GoogleResults = {
  items: [
    {
      kind: string;
      title: string;
      htmlTitle: string;
      link: string;
      displayLink: string;
      snippet: string;
      htmlSnippet: string;
      formattedUrl: string;
      htmlFormattedUrl: string;
      pagemap: {
        cse_image: [{ src: string }];
        cse_thumbnail: [{ src: string; width: string; height: string }];
        metatags: [
          {
            "og:image": string;
            "theme-color": string;
            "twitter:card": string;
            "twitter:title": string;
            "og:type": string;
            "og:site_name": string;
            "og:title": string;
            "og:description": string;
            "twitter:image": string;
            referrer: string;
            "twitter:image:alt": string;
            "og:locale:alternate": string;
            viewport: string;
            "twitter:description": string;
            "mobile-web-app-capable": string;
            "og:locale": string;
            "og:url": string;
          }
        ];
      };
    }
  ];
  searchInformation: {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: string;
    formattedTotalResults: string;
  };
  queries: {
    previousPage: GoogleResultsQueryPage[];
    request: GoogleResultsQueryPage[];
    nextPage: GoogleResultsQueryPage[];
  };
};
