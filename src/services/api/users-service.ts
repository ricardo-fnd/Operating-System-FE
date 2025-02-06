import { API_URL } from "src/env-variables";
import fetch from "./fetch";

import type { CreateUserBody } from "./request-types";
import type { User } from "src/types";
import type { Options } from "./fetch";

const create = async (body: CreateUserBody) => {
  const URL = `${API_URL}/users`;
  const data = await fetch<User>(URL, {
    method: "POST",
    body: JSON.stringify(body),
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

export { create, me };
