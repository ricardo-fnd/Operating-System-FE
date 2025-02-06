import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from "@tanstack/react-query";

import { create, me } from "../api/users-service";
import NotificationsService from "../notifications-service";
import { QUERIES_KEYS } from "src/enums";

import type { User } from "src/types";
import type { ApiError } from "../api/response-types";
import type { CreateUserBody } from "../api/request-types";
import type { UseQueryProps } from "./types";

const useCreate = (
  props: UseMutationOptions<User, ApiError, CreateUserBody>
) => {
  return useMutation({
    mutationFn: create,
    onError: (error) => NotificationsService.error(error.detail),
    ...props,
  });
};

const useMe = (props: UseQueryProps<User | null> = {}) => {
  return useQuery({
    queryKey: [QUERIES_KEYS.user],
    queryFn: me,
    staleTime: 60000 * 30,
    ...props,
  });
};

const UsersService = { useCreate, useMe };

export default UsersService;
