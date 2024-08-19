import { onRequest } from "./request-config";
import { onSuccess, onError } from "./response-config";

const customFetch = async (URL: string, options: RequestInit = {}) => {
  const config = await onRequest(options);
  let response = await fetch(URL, config);

  if (!response?.ok) return onError(response);
  return onSuccess(response);
};

export default customFetch;
