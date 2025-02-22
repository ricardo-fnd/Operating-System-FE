import { API_URL } from "src/env-variables";
import fetch from "./fetch";

import type { ForgotAccount } from "./request-types";

const sendForgotAccount = async (body: ForgotAccount) => {
  const URL = `${API_URL}/emails/forgot-account`;
  await fetch(URL, { method: "POST", body });
};

export { sendForgotAccount };
