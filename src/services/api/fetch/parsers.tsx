const toCamelCase = (key: string) =>
  key.replace(/([-_][a-z])/g, (match) => match.toUpperCase().replace("_", ""));

const parseResponse = <T,>(data: object | object[]): T => {
  if (Array.isArray(data)) return data.map((i) => parseResponse<T>(i)) as T;
  if ((data ?? null) === null || typeof data !== "object") return data as T;

  return Object.keys(data).reduce((result, key: string) => {
    return {
      ...result,
      [toCamelCase(key)]: parseResponse<T>(data[key as keyof typeof result]),
    };
  }, {}) as T;
};

export { parseResponse };
