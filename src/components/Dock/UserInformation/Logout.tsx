import Image from "next/image";

import { MenuOption } from "src/shared/components/Menu";
import logout from "public/user-menu/logout.svg";

import { AuthService, useLabels } from "src/services/client";

const StyledImage = "max-w-none";

const Logout = () => {
  const getLabel = useLabels();

  const { mutate } = AuthService.useLogout({
    onSuccess: () => window.location.reload(),
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
