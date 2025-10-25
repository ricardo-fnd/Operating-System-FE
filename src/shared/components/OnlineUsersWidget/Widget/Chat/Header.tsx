import Image from "next/image";

import { BackwardIcon } from "src/shared/components";
import defaultAvatar from "public/user-profile/default-avatar.svg";

import type { HeaderProps } from "../../types";

const StyledHeader = "flex items-center gap-1 p-3 font-medium text-slate-800 text-sm border-b border-slate-200 bg-slate-50";
const StyledBackwardIcon = "cursor-pointer";
const StyledAvatarContainer = "relative flex-shrink-0";
const StyledOnlineIndicator = "absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white";

const Header = ({ onBack, targetUser }: HeaderProps) => (
    <div className={StyledHeader}>
        <BackwardIcon color="#7C7C7C" onClick={onBack} className={StyledBackwardIcon} />
        <div className={StyledAvatarContainer} />
        <div className={StyledAvatarContainer}>
            <Image
                width={32}
                height={32}
                src={targetUser.avatar || defaultAvatar}
                alt={(targetUser.name ?? targetUser.username) as string}
            />
            <div className={StyledOnlineIndicator} />
        </div>
        <p>{targetUser.name ?? targetUser.username}</p>
    </div>
)

export default Header;