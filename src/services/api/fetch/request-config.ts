import { parseBody } from "./parsers";
import { API_KEY } from "src/env-variables";

import type { Options } from ".";

const onRequest = async (options: Options = {}) => {
  const { body, formData, headers = {} } = options;

  const fetchHeaders = new Headers(headers);
  fetchHeaders.set("X-Access-Key", API_KEY!);
  if (body) fetchHeaders.set("Content-Type", "application/json");

  const fetchOptions: RequestInit = {
    ...options,
    headers: fetchHeaders,
    method: options?.method || "GET",
    body: formData ?? prepareBody(options, body),
  };

  return fetchOptions;
};

const prepareBody = (options: Options, body: Options["body"]) => {
  if (!body || options?.method === "GET" || options?.method === "DELETE") {
    return null;
  }
  return JSON.stringify(parseBody(body));
};

export { onRequest };
