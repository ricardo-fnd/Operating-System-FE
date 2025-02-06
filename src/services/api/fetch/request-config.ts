import type { Options } from ".";

const onRequest = async (options: Options = {}) => {
  const { body, formData, headers = {} } = options;

  const fetchHeaders = new Headers(headers);
  if (body) fetchHeaders.set("Content-Type", "application/json");

  const fetchOptions: RequestInit = {
    ...options,
    headers: fetchHeaders,
    method: options?.method || "GET",
    body: formData ?? body,
  };

  return fetchOptions;
};

export { onRequest };
