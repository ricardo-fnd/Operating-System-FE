import { LABELS_URL, LOCALISE_KEY } from "src/env-variables";
import fetch from "./fetch";

import type { GetLocaleProps } from "./types";

const getTranslations = async ({ language }: GetLocaleProps) => {
  const URL = `${LABELS_URL}/${language}.json?format=script`;
  const data = await fetch(URL, {
    headers: { Authorization: `Loco ${LOCALISE_KEY}` },
  });

  return data;
};

const TranslationsService = {
  getTranslations,
};

export default TranslationsService;
