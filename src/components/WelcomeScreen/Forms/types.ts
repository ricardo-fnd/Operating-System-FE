import { User } from "src/types";

type LoginForm = {
  setUser: (user: User) => void;
  back: () => void;
};

type RegisterForm = {
  setUser: (user: User) => void;
  back: () => void;
};

type UsernameInput = {
  username: string;
  setUsername: (username: string) => void;
  next: () => void;
};

type PasswordInput = {
  username: string;
  setUser: (user: User) => void;
};

export type { LoginForm, RegisterForm, UsernameInput, PasswordInput };
