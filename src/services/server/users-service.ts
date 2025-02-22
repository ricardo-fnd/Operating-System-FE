import { cookies } from "next/headers";

import getQueryClient from "../get-query-client";
import { QUERIES_KEYS } from "src/enums";
import { me } from "../api/users-service";

const prefetchUser = async () => {
  const queryClient = getQueryClient();
  const cookieStore = await cookies();

  const headers = { Cookie: cookieStore.toString() };
  await queryClient.prefetchQuery({
    queryKey: [QUERIES_KEYS.user],
    queryFn: () => me({ headers }),
  });
};

const UsersService = { prefetchUser };

export default UsersService;
