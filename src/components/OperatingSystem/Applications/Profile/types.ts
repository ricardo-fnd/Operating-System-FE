import type { User } from "src/types";
import type { UpdateUser } from "src/services/api/request-types";
import type { ButtonProps } from "src/shared/components";

type RightDiv = {
  stopEdit: () => void;
  editing: boolean;
  user: User;
};

type EditButton = ButtonProps & { user: User };

type CompanyInfo = {
  editing: boolean;
  body: UpdateUser["body"];
  user: User;
  onChange: ({ field, value }: OnInfoChange) => void;
};

type PersonalInfo = {
  editing: boolean;
  user: User;
  body: UpdateUser["body"];
  onChange: ({ field, value }: OnInfoChange) => void;
};

type Passwords = {
  editing: boolean;
  body: UpdateUser["body"];
  onChange: ({ field, value }: OnInfoChange) => void;
};

type OnInfoChange = {
  field: keyof UpdateUser["body"];
  value: string;
};

export type {
  RightDiv,
  EditButton,
  CompanyInfo,
  PersonalInfo,
  Passwords,
  OnInfoChange,
};
