import CompanyInfo from "./CompanyInfo";
import PersonalInfo from "./PersonalInfo";
import Passwords from "./Passwords";
import ProfileVisibility from "./ProfileVisibility";

import { useLabels } from "src/services/client";

import type { OnInfoChange, ProfileInfo } from "../types";

const StyledContent = "flex flex-col gap-6 w-full p-8";
const StyledSections = "flex justify-between w-full *:max-w-[45%]";
const StyledSection = "flex flex-col gap-3 w-full";
const StyledSectionTitle = "text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200";

const ProfileInfo = ({ user, editing, body, setBody }: ProfileInfo) => {
  const getLabel = useLabels();

  const onChange = ({ field, value }: OnInfoChange) => {
    setBody((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className={StyledContent}>
      <div className={StyledSections}>
        <div className={StyledSection}>
          <h2 className={StyledSectionTitle}>{getLabel("user-profile.personal-info")}</h2>
          <PersonalInfo editing={editing} user={user} body={body} onChange={onChange} />
        </div>
        <div className={StyledSection}>
          <h2 className={StyledSectionTitle}>{getLabel("user-profile.company-info")}</h2>
          <CompanyInfo editing={editing} user={user} body={body} onChange={onChange} />
        </div>
      </div>
      <div className={StyledSection}>
        <h2 className={StyledSectionTitle}>{getLabel("user-profile.profile-visibility")}</h2>
        <ProfileVisibility editing={editing} user={user} body={body} onChange={onChange} />
      </div>
      <div className={StyledSection}>
        <h2 className={StyledSectionTitle}>{getLabel("user-profile.change-password")}</h2>
        <Passwords editing={editing} body={body} onChange={onChange} />
      </div>
    </div>
  );
};

export default ProfileInfo;

