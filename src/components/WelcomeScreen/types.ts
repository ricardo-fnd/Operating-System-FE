import type { SUPPORTED_LANGUAGES } from "src/enums";
import type { Guest, User } from "src/types";

type WelcomeScreen = { language: SUPPORTED_LANGUAGES };
type SetUser = User | Guest;
type ChooseUser = {
  setUser: (user: Guest) => void;
  setShowLoginForm: (boolean: boolean) => void;
};
type Form = { setUser: (user: User) => void; back: () => void };
type Submit = {
  loading: boolean;
  label: string;
  onClick: () => void;
  disabled: boolean;
};
type Validations = {
  username: string;
  password: string;
  confirmPassword?: string;
};

export type { WelcomeScreen, SetUser, ChooseUser, Form, Submit, Validations };
