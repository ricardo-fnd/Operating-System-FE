import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { search } from "../api/google-service";
import { QUERYS_KEY } from "../api/enum";

import type { SearchGoogleProps } from "../api/types";

const useSearch = ({ query, page }: SearchGoogleProps) => {
  return useQuery({
    queryKey: [QUERYS_KEY.googleSearch, query, page],
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
