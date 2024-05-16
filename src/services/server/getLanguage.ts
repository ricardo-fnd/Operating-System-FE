import { cookies, headers } from "next/headers";

import { SUPPORTED_LANGUAGES } from "src/enums";

const getLanguage = () => {
  const cookiesLang = cookies().get("NEXT_LOCALE")?.value;
  if (cookiesLang) {
    return SUPPORTED_LANGUAGES[cookiesLang as keyof typeof SUPPORTED_LANGUAGES];
  }

  const firstBrowserLang = headers().get("accept-language")?.split(",")[0];
  const locale = firstBrowserLang?.split("-")[0] || SUPPORTED_LANGUAGES.pt;

  return SUPPORTED_LANGUAGES[locale as keyof typeof SUPPORTED_LANGUAGES];
};

export default getLanguage;
1;
