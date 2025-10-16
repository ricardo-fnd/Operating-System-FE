import type { Guest, User } from "src/types";

type WelcomePage = {
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

type GuestCard = {
  onClick: () => void;
};

type LoginCard = {
  onClick: () => void;
};

type RegisterCard = {
  onClick: () => void;
};

export type { WelcomePage, SetUser, ChooseUser, Submit, GuestCard, LoginCard, RegisterCard };
