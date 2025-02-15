import Image from "next/image";

import { MenuOption } from "src/shared/components/Menu";
import profile from "public/user-menu/profile.svg";

import { useLabels } from "src/services/client";
import { AppsService } from "src/services";
import APPLICATIONS from "src/applications";

import type { Application } from "src/types";

const StyledImage = "max-w-none";

const Profile = ({ close }: { close: () => void }) => {
  const getLabel = useLabels();
  const open = AppsService.useOpen();

  const onClick = () => {
    const profileApp = APPLICATIONS.find((app) => app.id === 3) as Application;
    open(profileApp);
    close();
  };

  return (
    <MenuOption onClick={onClick}>
      <Image
        className={StyledImage}
        src={profile}
        width={20}
        height={20}
        alt="profile"
      />
      <p>{getLabel("commons.profile")}</p>
    </MenuOption>
  );
};

export default Profile;
