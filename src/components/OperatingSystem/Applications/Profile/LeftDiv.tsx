import Image from "next/image";

import defaultAvatar from "public/user-profile/default-avatar.svg";

import { useLabels } from "src/services/client";

import type { User } from "src/types";

const StyledLeft = "flex flex-col gap-6";
const StyledAvatar = "-my-6";
const StyledContent =
  "flex flex-col gap-1 max-w-40 [&>:not(:first-child)]:text-sm [&>:not(:first-child)]:truncate";
const StyledName = "text-xl font-medium";

const LeftDiv = ({ user }: { user: User }) => {
  const getLabel = useLabels();

  const name = user.name ?? user.username ?? user.email?.split("@")[0];

  return (
    <div className={StyledLeft}>
      <Image
        width={156}
        height={156}
        alt="avatar"
        src={defaultAvatar}
        className={StyledAvatar}
      />
      <div className={StyledContent}>
        <p className={StyledName}>{name}</p>
        <p>{user.companyName ?? getLabel("user-profile.no-company")}</p>
        <p>{user.job ?? getLabel("user-profile.no-job")}</p>
      </div>
    </div>
  );
};

export default LeftDiv;
