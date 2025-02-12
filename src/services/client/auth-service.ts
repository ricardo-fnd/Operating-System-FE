import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { auth, logout } from "../api/auth-service";
import NotificationsService from "../notifications-service";

import type { User } from "src/types";
import type { AuthBody } from "../api/request-types";
import type { ApiError } from "../api/response-types";

const useAuth = (props: UseMutationOptions<User, ApiError, AuthBody>) => {
  return useMutation({
    mutationFn: auth,
    onError: (error) => NotificationsService.error(error.detail),
    ...props,
  });
};

const useLogout = (props?: UseMutationOptions<void, ApiError>) => {
  return useMutation({
    mutationFn: logout,
    ...props,
  });
};

const AuthService = { useAuth, useLogout };

export default AuthService;
