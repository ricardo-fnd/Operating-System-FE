import JSCookies from "js-cookie";

import { COOKIES_DOMAIN } from "src/env-variables";

export type SetCookiesProps = {
  value: string | object | ((prev: object | []) => object | []);
  name: string;
  expires?: number;
};

const getCookies = ({ name }: { name: string }) => {
  const value = JSCookies.get(name);
  return value ? JSON.parse(value) : null;
};

const setCookies = ({ value, name, expires = 365 }: SetCookiesProps) => {
  if (!value) throw new Error("setCookies should receive a value");
  let newValue = value;

  if (typeof value === "function") {
    const callback = value;
    const prev = getCookies({ name });
    newValue = callback(prev);
  }
  newValue = typeof newValue !== "string" ? JSON.stringify(newValue) : newValue;

  JSCookies.set(name, newValue, {
    expires,
    domain: COOKIES_DOMAIN,
  });
};

export { setCookies, getCookies };
