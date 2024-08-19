const onRequest = async (options: RequestInit = {}) => {
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
