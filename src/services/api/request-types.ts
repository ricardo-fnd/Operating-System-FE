import type { SUPPORTED_LANGUAGES } from "src/enums";
import type { User } from "src/types";

export type CreateUserBody = {
  account: string;
  password: string;
};

export type GetUserByAccount = { params: { account: string } };

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
    public?: boolean;
  };
};

export type UpdatePassword = {
  token: string;
  body: {
    password: string;
    passwordConfirmation: string;
  };
};

export type SendForgotAccount = {
  email: string;
};

export type SendVerifyAccount = {
  email: string;
};

export type VerifyAccount = { token: string };

export type AuthBody = {
  account: string;
  password: string;
};

export type SearchGoogleParams = {
  query: string;
  page: number;
};

export type GetLocaleParams = {
  language: SUPPORTED_LANGUAGES;
};
