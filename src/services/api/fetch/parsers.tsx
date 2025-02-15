import type { Options } from ".";

const toCamelCase = (key: string) =>
  key.replace(/([-_][a-z])/g, (match) => match.toUpperCase().replace("_", ""));

const toSnakeCase = (key: string) =>
  key.replace(/([A-Z])/g, "_$1").toLowerCase();

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

const parseBody = (obj?: Options["body"]) => {
  if (!obj) return null;

  const entries = Object.entries(obj);
  const parsed = entries.map(([key, value]) => [
    toSnakeCase(key),
    value === "" ? null : value,
  ]);

  return Object.fromEntries(parsed);
};

export { parseResponse, parseBody };
