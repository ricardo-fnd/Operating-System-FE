import Image from "next/image";

import defaultAvatar from "public/user-profile/default-avatar.svg";

import type { OnlineUserProps } from "../types";

const StyledUserItem = "flex items-center gap-3 px-2 py-1";
const StyledAvatarContainer = "relative flex-shrink-0 [&_image]:rounded-full";
const StyledOnlineIndicator = "absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white";
const StyledName = "font-medium text-slate-800 text-sm truncate";
const StyledMeLabel = "text-slate-500 font-normal ml-1";

const OnlineUser = ({ user, currentUser }: OnlineUserProps) => {
  const displayName = (user.name ?? user.username) as string;
  const isMe = currentUser?.id === user.id;

  return (
    <div className={StyledUserItem}>
      <div className={StyledAvatarContainer}>
        <Image
          width={36}
          height={36}
          alt={displayName}
          src={user.avatar || defaultAvatar}
        />
        <div className={StyledOnlineIndicator} />
      </div>
      <p className={StyledName}>
        {displayName}
        {isMe && <span className={StyledMeLabel}>(me)</span>}
      </p>
    </div>
  );
};

export default OnlineUser;

