import { LogoutIcon } from "src/shared/components";
import { MenuOption } from "src/shared/components/Menu";

import { AuthService, useLabels } from "src/services/client";

const Logout = () => {
  const getLabel = useLabels();

  const { mutate } = AuthService.useLogout({
    onSuccess: () => window.location.reload(),
  });

  return (
    <MenuOption onClick={() => mutate()}>
      <LogoutIcon color="#e13737" />
      <p>{getLabel("user-menu.logout")}</p>
    </MenuOption>
  );
};

export default Logout;
