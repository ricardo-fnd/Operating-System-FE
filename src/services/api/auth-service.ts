import { API_URL } from "src/env-variables";
import fetch from "./fetch";

import type { AuthBody } from "./request-types";
import type { User } from "src/types";

const auth = async (body: AuthBody) => {
  const URL = `${API_URL}/auth`;

  const formData = new FormData();
  formData.append("username", body.username);
  formData.append("password", body.password);

  const data = await fetch<User>(URL, {
    method: "POST",
    formData,
    credentials: "include",
  });

  return data as User;
};

const logout = async () => {
  const URL = `${API_URL}/auth/logout`;
  await fetch(URL, { method: "POST", credentials: "include" });
};

export { auth, logout };
