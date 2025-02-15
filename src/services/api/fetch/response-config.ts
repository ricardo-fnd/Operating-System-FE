import { parseResponse } from "./parsers";

import type { Options } from ".";

const onSuccess = async <T>(
  response: Response,
  options: Options = {}
): Promise<T | null> => {
  if (response.status === 204) return null;

  const responseJSON = await response.json();
  if (options.parseResponse !== false) return parseResponse<T>(responseJSON);
  return responseJSON;
};

const onError = async (response: Response) => {
  const error = await response.json();
  throw error;
};

export { onSuccess, onError };
