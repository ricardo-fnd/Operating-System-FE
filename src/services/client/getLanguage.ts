import JSCookies from "js-cookie";

import { SUPPORTED_LANGUAGES } from "src/enums";

const getLanguage = () => {
  const cookiesLang = JSCookies.get("NEXT_LOCALE");
  if (cookiesLang) {
    return SUPPORTED_LANGUAGES[cookiesLang as keyof typeof SUPPORTED_LANGUAGES];
  }

  const firstBrowserLang = navigator.language;
  const locale = firstBrowserLang?.split("-")[0] || SUPPORTED_LANGUAGES.pt;

  return SUPPORTED_LANGUAGES[locale as keyof typeof SUPPORTED_LANGUAGES];
};

export default getLanguage;
1;
