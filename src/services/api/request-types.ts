import { SUPPORTED_LANGUAGES } from "src/enums";

export type CreateUserBody = {
  name?: string;
  username: string;
  password: string;
};

export type AuthBody = {
  username: string;
  password: string;
};

export type SearchGoogleParams = {
  query: string;
  page: number;
};

export type GetLocaleParams = {
  language: SUPPORTED_LANGUAGES;
};
