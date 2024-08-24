import { cookies } from "next/headers";

import type { GetCookiesProps } from "../types";

const getCookies = ({ name }: GetCookiesProps) => {
  const value = cookies().get(name)?.value;
  return value ? JSON.parse(value) : null;
};

export { getCookies };
