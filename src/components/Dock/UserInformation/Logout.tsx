import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import logout from "public/user-menu/logout.svg";

import { AuthService, useLabels } from "src/services/client";
import { QUERIES_KEYS } from "src/enums";

const StyledLogout =
  "flex gap-1 py-1.5 px-3 items-center cursor-pointer [&_img]:max-w-[none] hover:bg-zinc-700";

const Logout = () => {
  const queryClient = useQueryClient();
  const getLabel = useLabels();

  const { mutate } = AuthService.useLogout({
    onSuccess: () => queryClient.setQueryData([QUERIES_KEYS.user], null),
  });

  return (
    <div className={StyledLogout}>
      <Image src={logout} width={24} height={24} alt="logout" />
      <p onClick={() => mutate()}>{getLabel("user-menu.logout")}</p>
    </div>
  );
};

export default Logout;
