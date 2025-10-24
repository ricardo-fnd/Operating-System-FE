import { useQuery } from "@tanstack/react-query";

import { getOnlineUsers } from "../api/online-users-service";
import { QUERIES_KEYS } from "src/enums";

import type { User } from "src/types";
import type { UseQueryProps } from "./types";

const useOnlineUsers = (props: UseQueryProps<User[]> = {}) => {
  return useQuery({
    queryKey: [QUERIES_KEYS.onlineUsers],
    queryFn: getOnlineUsers,
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    ...props,
  });
};

const OnlineUsersService = {
  useOnlineUsers,
};

export default OnlineUsersService;

