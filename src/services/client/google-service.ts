import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { search } from "../api/google-service";
import { QUERIES_KEYS } from "src/enums";

import type { SearchGoogleParams } from "../api/request-types";

const useSearch = ({ query, page }: SearchGoogleParams) => {
  return useQuery({
    queryKey: [QUERIES_KEYS.googleSearch, query, page],
    queryFn: () => search({ query, page }),
    placeholderData: keepPreviousData,
    staleTime: 5000,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
  });
};

const GoogleService = { useSearch };

export default GoogleService;
