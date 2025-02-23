import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { sendForgotAccount, sendVerifyAccount } from "../api/emails-service";
import NotificationsService from "../notifications-service";

import type { ApiError } from "../api/response-types";
import type {
  SendForgotAccount,
  SendVerifyAccount,
} from "../api/request-types";

const useSendForgotAccount = (
  props: UseMutationOptions<void, ApiError, SendForgotAccount>
) => {
  return useMutation({
    mutationFn: sendForgotAccount,
    onError: (error) => NotificationsService.error(error.detail),
    ...props,
  });
};

const useSendVerifyAccount = (
  props: UseMutationOptions<void, ApiError, SendVerifyAccount>
) => {
  return useMutation({
    mutationFn: sendVerifyAccount,
    onError: (error) => NotificationsService.error(error.detail),
    ...props,
  });
};

const EmailsService = {
  useSendForgotAccount,
  useSendVerifyAccount,
};

export default EmailsService;
