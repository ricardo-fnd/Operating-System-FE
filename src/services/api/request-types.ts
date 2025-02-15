import type { SUPPORTED_LANGUAGES } from "src/enums";
import type { User } from "src/types";

export type CreateUserBody = {
  name?: string;
  username: string;
  password: string;
};

export type UpdateUser = {
  id: User["id"];
  body: {
    name?: string;
    username?: string;
    password?: string;
    passwordConfirmation?: string;
    job?: string;
    companyName?: string;
    email?: string;
  };
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
