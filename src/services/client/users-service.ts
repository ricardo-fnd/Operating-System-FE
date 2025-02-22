import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from "@tanstack/react-query";

import {
  create,
  getByAccount,
  me,
  update,
  updatePassword,
} from "../api/users-service";
import NotificationsService from "../notifications-service";
import { QUERIES_KEYS } from "src/enums";

import type { User } from "src/types";
import type { ApiError } from "../api/response-types";
import type {
  CreateUserBody,
  GetUserByAccount,
  UpdatePassword,
  UpdateUser,
} from "../api/request-types";
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

const useAccount = (
  props: UseMutationOptions<User | null, ApiError, GetUserByAccount>
) => {
  return useMutation({
    mutationFn: getByAccount,
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

const useUpdate = (props: UseMutationOptions<User, ApiError, UpdateUser>) => {
  return useMutation({
    mutationFn: update,
    onError: (error) => NotificationsService.error(error.detail),
    ...props,
  });
};

const useUpdatePassword = (
  props: UseMutationOptions<void, ApiError, UpdatePassword>
) => {
  return useMutation({
    mutationFn: updatePassword,
    onError: (error) => NotificationsService.error(error.detail),
    ...props,
  });
};

const UsersService = {
  useCreate,
  useAccount,
  useMe,
  useUpdate,
  useUpdatePassword,
};

export default UsersService;
