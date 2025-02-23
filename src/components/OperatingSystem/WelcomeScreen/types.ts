import type { Guest, User } from "src/types";

type WelcomePage = {
  user?: User | null;
  enter: () => void;
};

type WelcomeBack = {
  user: User;
  showLogin: () => void;
  enter: () => void;
};

type SetUser = User | Guest;

type ChooseUser = {
  setUser: (user: Guest) => void;
  showRegister: () => void;
  showLogin: () => void;
};

type Submit = {
  loading: boolean;
  label: string;
  onClick: () => void;
  disabled: boolean;
};

export type { WelcomePage, WelcomeBack, SetUser, ChooseUser, Submit };
