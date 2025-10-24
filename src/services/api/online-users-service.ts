import fetch from "./fetch";

import type { User } from "src/types";

const getOnlineUsers = async () => {
  const URL = '/online-users/online';
  const data = await fetch<User[]>(URL, {
    credentials: "include",
  });

  return data || [];
};

export { getOnlineUsers };

