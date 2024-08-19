import { useTranslations } from "src/context";

import type { LocalizeProps } from "../types";

const useLabels = () => {
  const translations = useTranslations();

  return (key: LocalizeProps["key"]) => parseKey(translations, key);
};

const parseKey = (locale: { [key: string]: string }, key: string): string => {
  return locale[key];
};

export default useLabels;
