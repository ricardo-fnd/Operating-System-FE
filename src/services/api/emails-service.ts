import fetch from "./fetch";

import type { SendForgotAccount, SendVerifyAccount } from "./request-types";

const sendForgotAccount = async (body: SendForgotAccount) => {
  const URL = "/emails/forgot-account";
  await fetch(URL, { method: "POST", body });
};

const sendVerifyAccount = async (body: SendVerifyAccount) => {
  const URL = "/emails/verify-account";
  await fetch(URL, { method: "PUT", body });
};

export { sendForgotAccount, sendVerifyAccount };
