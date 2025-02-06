import { cookies } from "next/headers";

const getCookies = ({ name }: { name: string }) => {
  const value = cookies().get(name)?.value;
  return value ? JSON.parse(value) : null;
};

export { getCookies };
