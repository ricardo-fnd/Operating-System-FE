import { API_URL } from "src/env-variables";
import fetch from "./fetch";

import type { CreateUserBody, UpdateUser } from "./request-types";
import type { User } from "src/types";
import type { Options } from "./fetch";

const create = async (body: CreateUserBody) => {
  const URL = `${API_URL}/users`;
  const data = await fetch<User>(URL, {
    method: "POST",
    credentials: "include",
    body,
  });

  return data as User;
};

const me = async (options: Options = {}) => {
  try {
    const URL = `${API_URL}/users/me`;
    const data = await fetch<User>(URL, {
      credentials: "include",
      ...options,
    });

    return data as User;
  } catch (error) {
    return null;
  }
};

const update = async ({ id, body }: UpdateUser) => {
  const URL = `${API_URL}/users/${id}`;
  const data = await fetch<User>(URL, {
    method: "PUT",
    credentials: "include",
    body,
  });

  return data as User;
};

export { create, me, update };
