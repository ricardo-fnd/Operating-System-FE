import { API_URL } from "src/env-variables";
import { onRequest } from "./request-config";
import { onSuccess, onError } from "./response-config";

export type Options = Omit<RequestInit, "body"> & {
  body?: { [key: string]: unknown } | { [key: string]: unknown }[];
  formData?: FormData;
  parseResponse?: boolean;
};

const customFetch = async <T,>(
  URL: string,
  options: Options = {}
): Promise<T | null> => {
  const config = await onRequest(options);

  const BASE_URL = URL.includes('http') ? URL : `${API_URL}${URL}`;
  let response = await fetch(BASE_URL, config);

  if (!response?.ok) return onError(response);
  return onSuccess<T>(response, options);
};

export default customFetch;
