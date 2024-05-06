import { onRequest } from "./request-config";
import { onSuccess, onError } from "./response-config";

import type { Options } from "./types";

const customFetch = async (URL: string, options: Options = {}) => {
  const config = await onRequest(options);
  let response = await fetch(URL, config);

  if (!response?.ok) return onError(response);
  return onSuccess(response);
};

export default customFetch;
