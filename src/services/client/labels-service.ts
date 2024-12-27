import { useTranslations } from "src/context";

import type { LocalizeProps } from "../types";

type ParseKeyProps = {
  translations: { [key: string]: string };
  key: string;
  interpolate?: { [key: string]: string | number };
};

const useLabels = () => {
  const translations = useTranslations();

  return (
    key: LocalizeProps["key"],
    interpolate?: ParseKeyProps["interpolate"]
  ) => parseKey({ translations, key, interpolate });
};

const parseKey = ({
  translations,
  key,
  interpolate,
}: ParseKeyProps): string => {
  const label = translations[key];

  if (interpolate) {
    let labelWithPlaceholder = label;
    Object.keys(interpolate).map((key) => {
      const value = interpolate[key].toString();
      labelWithPlaceholder = label.replace(new RegExp(`{${key}}`, "g"), value);
    });

    return labelWithPlaceholder;
  }

  return label;
};

export default useLabels;
