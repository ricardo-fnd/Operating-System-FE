import { useTranslations } from "src/context";

type ParseKeyProps = {
  key: string;
  translations: { [key: string]: string };
  interpolate?: { [key: string]: string | number };
};

const useLabels = () => {
  const translations = useTranslations();

  return (
    key: ParseKeyProps["key"],
    interpolate?: ParseKeyProps["interpolate"]
  ) => parseKey({ translations, key, interpolate });
};

const parseKey = ({
  key,
  translations,
  interpolate,
}: ParseKeyProps): string => {
  const label = translations[key];

  if (interpolate) {
    let labelWithPlaceholder = label;
    Object.keys(interpolate).map((key) => {
      const value = interpolate[key].toString();
      labelWithPlaceholder = label?.replace(new RegExp(`{${key}}`, "g"), value);
    });

    return labelWithPlaceholder;
  }

  return label;
};

export default useLabels;
