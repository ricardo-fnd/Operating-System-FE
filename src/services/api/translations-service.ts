import { DOMAIN_URL } from "src/env-variables";
import fetch from "./fetch";

import type { GetLocaleParams } from "./request-types";
import type { Translations } from "src/types";

const getTranslations = async ({ language }: GetLocaleParams) => {
  const URL = `${DOMAIN_URL}/api/translations?language=${language}`;
  const data = await fetch<Translations>(URL, {
    cache: "no-store",
    parseResponse: false,
  });

  return data as Translations;
};

const TranslationsService = {
  getTranslations,
};

export default TranslationsService;
