import { useState } from "react";

import ProfileHeader from "./Header";
import ProfileInfo from "./Content";

import { UsersService } from "src/services/client";

import type { User } from "src/types";
import type { UpdateUser } from "src/services/api/request-types";

const StyledContainer = "flex flex-col items-center w-full h-full show-y-scrollbar";

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [body, setBody] = useState<UpdateUser["body"]>({});

  const { data } = UsersService.useMe();
  const user = data as User;

  const toggleEdit = () => setEditing(!editing);

  return (
    <div className={StyledContainer}>
      <ProfileHeader body={body} setBody={setBody} user={user} editing={editing} toggleEdit={toggleEdit} />
      <ProfileInfo body={body} setBody={setBody} user={user} editing={editing} />
    </div>
  );
};

export default Profile;
