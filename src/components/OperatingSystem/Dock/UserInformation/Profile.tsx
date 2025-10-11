import { MenuOption } from "src/shared/components/Menu";
import { ProfileIcon } from "src/shared/components";

import { useLabels } from "src/services/client";
import { AppsService } from "src/services";
import APPLICATIONS from "src/applications";

import type { Application } from "src/types";

const Profile = ({ close }: { close: () => void }) => {
  const getLabel = useLabels();
  const open = AppsService.useOpen();

  const onClick = () => {
    const profileApp = APPLICATIONS.find((app) => app.name === "commons.profile") as Application;
    open(profileApp);
    close();
  };

  return (
    <MenuOption onClick={onClick}>
      <ProfileIcon color="orange" />
      <p>{getLabel("commons.profile")}</p>
    </MenuOption>
  );
};

export default Profile;
