import JSCookies from "js-cookie";

import { COOKIES_DOMAIN } from "src/env-variables";

import type { GetCookiesProps, SetCookiesProps } from "../types";

const getCookies = ({ name }: GetCookiesProps) => {
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

  JSCookies.set(name, JSON.stringify(newValue), {
    expires,
    domain: COOKIES_DOMAIN,
  });
};

export { setCookies };
