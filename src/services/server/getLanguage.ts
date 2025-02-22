import { cookies, headers } from "next/headers";

import { SUPPORTED_LANGUAGES } from "src/enums";

const getLanguage = () => {
  const cookiesLang = cookies().get("NEXT_LOCALE")?.value;
  if (cookiesLang) {
    return (
      SUPPORTED_LANGUAGES[cookiesLang as keyof typeof SUPPORTED_LANGUAGES] ??
      SUPPORTED_LANGUAGES.en
    );
  }

  const firstBrowserLang = headers().get("accept-language")?.split(",")[0];
  const locale = firstBrowserLang?.split(/[-;]/)[0];

  return (
    SUPPORTED_LANGUAGES[locale as keyof typeof SUPPORTED_LANGUAGES] ??
    SUPPORTED_LANGUAGES.en
  );
};

export default getLanguage;
1;
