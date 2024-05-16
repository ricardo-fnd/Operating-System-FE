import { DOMAIN_URL } from "src/env-variables";
import fetch from "./fetch";

import type { GetLocaleProps } from "./types";

const getTranslations = async ({ language }: GetLocaleProps) => {
  const URL = `${DOMAIN_URL}/api/translations?language=${language}`;
  const data = await fetch(URL);

  return data;
};

const TranslationsService = {
  getTranslations,
};

export default TranslationsService;
