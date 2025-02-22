type Inputs = {
  password: string;
  passwordConfirmation: string;
  setPassword: (password: string) => void;
  setPasswordConfirmation: (password: string) => void;
  submit: () => void;
};

export type { Inputs };
