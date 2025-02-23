import { cookies } from "next/headers";

import getQueryClient from "../get-query-client";
import { QUERIES_KEYS } from "src/enums";
import { me, verifyAccount as verify } from "../api/users-service";

import type { VerifyAccount } from "../api/request-types";

const prefetchUser = async () => {
  const queryClient = getQueryClient();
  const cookieStore = await cookies();

  const headers = { Cookie: cookieStore.toString() };
  await queryClient.prefetchQuery({
    queryKey: [QUERIES_KEYS.user],
    queryFn: () => me({ headers }),
  });
};

const verifyAccount = async ({ token }: VerifyAccount) => {
  const queryClient = getQueryClient();

  return await queryClient.fetchQuery({
    queryKey: [QUERIES_KEYS.user],
    queryFn: () => verify({ token }),
  });
};

const UsersService = { prefetchUser, verifyAccount };

export default UsersService;
