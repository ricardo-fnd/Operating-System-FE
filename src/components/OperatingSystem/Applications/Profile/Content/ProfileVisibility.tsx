import { useLabels } from "src/services/client";

import type { ProfileVisibilityProps } from "../types";

const StyledContainer = "flex gap-10";
const StyledRadioContainer = "flex items-center gap-2";
const StyledRadio = "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300";
const StyledLabel = "text-sm font-medium text-slate-700";

const ProfileVisibility = ({ editing, body, onChange, user }: ProfileVisibilityProps) => {
  const getLabel = useLabels();
  
  const isPublic = body.public !== undefined ? body.public : (user.public ?? true);

  return (
    <div className={StyledContainer}>
      <div className={StyledRadioContainer}>
        <input
          id="profile-public"
          type="radio"
          name="profile-visibility"
          disabled={!editing}
          checked={isPublic}
          onChange={() => onChange({ field: "public", value: true })}
          className={StyledRadio}
        />
        <label htmlFor="profile-public" className={StyledLabel}>
          {getLabel("user-profile.public-profile")}
        </label>
      </div>
      <div className={StyledRadioContainer}>
        <input
          id="profile-private"
          type="radio"
          name="profile-visibility"
          disabled={!editing}
          checked={!isPublic}
          onChange={() => onChange({ field: "public", value: false })}
          className={StyledRadio}
        />
        <label htmlFor="profile-private" className={StyledLabel}>
          {getLabel("user-profile.private-profile")}
        </label>
      </div>
    </div>
  );
};

export default ProfileVisibility;

