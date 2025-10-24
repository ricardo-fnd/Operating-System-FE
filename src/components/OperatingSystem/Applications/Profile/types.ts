import type { User } from "src/types";
import type { UpdateUser } from "src/services/api/request-types";
import type { ButtonProps } from "src/shared/components";
import type { Dispatch, SetStateAction } from "react";

type EditButton = ButtonProps & { user: User; editing: boolean };
type SaveButton = ButtonProps & { user: User; editing: boolean; stopEdit: () => void; body: UpdateUser["body"]; setBody: (body: UpdateUser["body"]) => void };

type ProfileInfo = {
  editing: boolean;
  user: User;
  body: UpdateUser["body"];
  setBody: Dispatch<SetStateAction<UpdateUser["body"]>>;
};

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

type ProfileVisibilityProps = {
  editing: boolean;
  user: User;
  body: UpdateUser["body"];
  onChange: ({ field, value }: OnInfoChange) => void;
};

type OnInfoChange = {
  field: keyof UpdateUser["body"];
  value: string | boolean;
};

export type {
  ProfileInfo,
  EditButton,
  CompanyInfo,
  PersonalInfo,
  Passwords,
  OnInfoChange,
  ProfileVisibilityProps,
  SaveButton,
};
