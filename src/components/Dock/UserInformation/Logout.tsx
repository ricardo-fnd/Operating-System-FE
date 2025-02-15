import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import { MenuOption } from "src/shared/components/Menu";
import logout from "public/user-menu/logout.svg";

import { AuthService, useLabels } from "src/services/client";
import { QUERIES_KEYS } from "src/enums";

const StyledImage = "max-w-none";

const Logout = () => {
  const queryClient = useQueryClient();
  const getLabel = useLabels();

  const { mutate } = AuthService.useLogout({
    onSuccess: () => queryClient.setQueryData([QUERIES_KEYS.user], null),
  });

  return (
    <MenuOption onClick={() => mutate()}>
      <Image
        className={StyledImage}
        src={logout}
        width={20}
        height={20}
        alt="logout"
      />
      <p>{getLabel("user-menu.logout")}</p>
    </MenuOption>
  );
};

export default Logout;
