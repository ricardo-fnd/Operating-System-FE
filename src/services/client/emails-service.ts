import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { sendForgotAccount } from "../api/emails-service";
import NotificationsService from "../notifications-service";

import type { ApiError } from "../api/response-types";
import type { ForgotAccount } from "../api/request-types";

const useSendForgotAccount = (
  props: UseMutationOptions<void, ApiError, ForgotAccount>
) => {
  return useMutation({
    mutationFn: sendForgotAccount,
    onError: (error) => NotificationsService.error(error.detail),
    ...props,
  });
};

const EmailsService = {
  useSendForgotAccount,
};

export default EmailsService;
