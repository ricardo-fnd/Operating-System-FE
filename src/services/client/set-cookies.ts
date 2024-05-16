import JSCookies from "js-cookie";

import { COOKIES_DOMAIN } from "src/env-variables";

import type { SetCookiesProps } from "../types";

const setCookies = ({ value, name, expires = 365 }: SetCookiesProps) => {
  JSCookies.set(name, value, { expires, domain: COOKIES_DOMAIN });
};

export { setCookies };
