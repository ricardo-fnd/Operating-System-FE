import { cookies } from "next/headers";

import getQueryClient from "../get-query-client";
import { QUERIES_KEYS } from "src/enums";
import { me } from "../api/users-service";

import type { User } from "src/types";

const prefetchUser = async (): Promise<User | null> => {
  const queryClient = getQueryClient();
  const cookieStore = await cookies();

  const headers = { Cookie: cookieStore.toString() };
  const user = await queryClient.fetchQuery({
    queryKey: [QUERIES_KEYS.user],
    queryFn: () => me({ headers }),
  });

  return user;
};

const UsersService = { prefetchUser };

export default UsersService;
