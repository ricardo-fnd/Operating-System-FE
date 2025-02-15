import { useState } from "react";

import EditButton from "./EditButton";
import LeftDiv from "./LeftDiv";
import RightDiv from "./RightDiv";

import { UsersService } from "src/services/client";

import type { User } from "src/types";

const StyledContainer =
  "relative flex gap-4 justify-between mx-auto px-10 pb-10 pt-20 max-w-4xl";

const Profile = () => {
  const [editing, setEditing] = useState(false);

  const { data } = UsersService.useMe();
  const user = data as User;

  const toggleEdit = () => setEditing(!editing);

  return (
    <div className={StyledContainer}>
      <EditButton disabled={user.guest} onClick={toggleEdit} />
      <LeftDiv user={user} />
      <RightDiv stopEdit={toggleEdit} user={user} editing={editing} />
    </div>
  );
};

export default Profile;
