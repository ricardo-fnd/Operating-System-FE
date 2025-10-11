import { useState } from "react";
import Image from "next/image";

import defaultAvatar from "public/user-profile/default-avatar.svg";
import EditButton from "./Buttons/EditButton";
import SaveButton from "./Buttons/SaveButton";
import ConfirmEmail from "./Buttons/ConfirmEmail";
import ChooseEmailModal from "./ChooseEmailModal";

import type { User } from "src/types";
import type { UpdateUser } from "src/services/api/request-types";

type ProfileHeaderProps = {
  user: User;
  editing: boolean;
  toggleEdit: () => void;
  body: UpdateUser["body"];
  setBody: (body: UpdateUser["body"]) => void;
};

const StyledAvatarSection = "relative flex flex-col items-center w-full gap-4 py-8 bg-gradient-to-b from-zinc-950 to-zinc-600";
const StyledAvatar = "w-32 h-32 rounded-full border-4 border-white shadow-xl";
const StyledContainer = "flex flex-col items-center gap-3 text-white";
const StyledName = "text-3xl font-bold";
const StyledDiv = "flex flex-col items-center gap-1 text-blue-100 text-sm";

const ProfileHeader = ({ user, editing, toggleEdit, body, setBody }: ProfileHeaderProps) => {
  const [showEmailModal, setShowEmailModal] = useState(false);

  const name = user.name ?? user.username ?? user.email?.split("@")[0];
  const jobCompany = [user.job, user.companyName].filter(Boolean).join(" at ");

  return (
    <>
      <div className={StyledAvatarSection}>
        <Image
          width={128}
          height={128}
          alt="avatar"
          src={defaultAvatar}
          className={StyledAvatar}
        />
        <div className={StyledContainer}>
          <h2 className={StyledName}>{name}</h2>
          <div className={StyledDiv}>
            {user.email && <p>{user.email}</p>}
            {jobCompany && <p>{jobCompany}</p>}
          </div>
          <ConfirmEmail user={user} onAddEmail={() => setShowEmailModal(true)} />
          <EditButton editing={editing} user={user} onClick={toggleEdit} />
          <SaveButton user={user} editing={editing} stopEdit={toggleEdit} body={body} setBody={setBody} />
        </div>
      </div>
      {showEmailModal && <ChooseEmailModal user={user} close={() => setShowEmailModal(false)} />}
    </>
  );
};

export default ProfileHeader;

