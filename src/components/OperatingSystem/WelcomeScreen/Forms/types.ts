import { User } from "src/types";

type LoginForm = {
  setUser: (user: User) => void;
  back: () => void;
};

type RegisterForm = {
  setUser: (user: User) => void;
  back: () => void;
};

type AccountInput = {
  account: string;
  setAccount: (account: string) => void;
  next: () => void;
};

type PasswordInput = {
  account: string;
  setUser: (user: User) => void;
};

type ForgotAccount = {
  label: string;
};

type ForgotPasswordModal = {
  account: string;
  close: () => void;
};

export type {
  LoginForm,
  RegisterForm,
  AccountInput,
  PasswordInput,
  ForgotAccount,
  ForgotPasswordModal,
};
