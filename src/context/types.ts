import type { Dispatch, SetStateAction } from "react";
import type { SUPPORTED_LANGUAGES } from "src/enums";
import type { ShortcutPosition, Translations, User, WebSocketMessage } from "src/types";

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

type AppsProviderProps = Provider<ShortcutPosition[] | null | undefined> & {
  initialUser: User | null;
};

type WebSocketContextProps = {
  messages: Map<number, Array<WebSocketMessage['data'] & { read: boolean }>>;
  sendMessage: (message: WebSocketMessage['data']) => void;
  markAsRead: (userId: number) => void;
  addMessage: (message: any) => void;
};

export type { SetState, Provider, BaseProviders, AppsProviderProps, WebSocketContextProps };
