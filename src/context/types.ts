import type { Dispatch, SetStateAction } from "react";
import type { SUPPORTED_LANGUAGES } from "src/enums";
import type { Translations } from "src/types";

type SetState<T> = Dispatch<SetStateAction<T>>;
type Provider<T = undefined> = Readonly<{
  children: React.ReactNode;
  data?: T;
}>;
type BaseProviders = {
  language: SUPPORTED_LANGUAGES;
  translations: Translations;
  children: React.ReactNode;
};

export type { SetState, Provider, BaseProviders };
