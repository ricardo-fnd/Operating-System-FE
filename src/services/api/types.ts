import { SUPPORTED_LANGUAGES } from "src/enums";

type SearchGoogleProps = {
  query: string;
  page: number;
};

type GetLocaleProps = {
  language: SUPPORTED_LANGUAGES;
};

export type { GetLocaleProps, SearchGoogleProps };
