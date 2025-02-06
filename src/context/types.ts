import type { Dispatch, SetStateAction } from "react";
import type { ShortcutsPositions, Translations } from "src/types";

type SetState<T> = Dispatch<SetStateAction<T>>;
type Provider<T = undefined> = Readonly<{
  children: React.ReactNode;
  data?: T;
}>;
type BaseProviders = {
  translations: Translations;
  shortcutsPositions: ShortcutsPositions;
  children: React.ReactNode;
};

export type { SetState, Provider, BaseProviders };
