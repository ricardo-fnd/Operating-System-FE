import type { Options } from "./types";

const onRequest = async (options: Options = {}) => {
  const { headers = {} } = options;

  const fetchHeaders: RequestInit["headers"] = {
    ...headers,
  };

  const fetchOptions: RequestInit = {
    ...options,
    headers: fetchHeaders,
    method: options?.method || "GET",
  };

  return fetchOptions;
};

export { onRequest };
