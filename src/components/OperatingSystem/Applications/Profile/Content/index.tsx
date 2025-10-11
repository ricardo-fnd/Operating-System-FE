import CompanyInfo from "./CompanyInfo";
import PersonalInfo from "./PersonalInfo";
import Passwords from "./Passwords";

import { useLabels } from "src/services/client";

import type { OnInfoChange } from "../types";
import type { UpdateUser } from "src/services/api/request-types";
import type { User } from "src/types";

const StyledSections = "flex justify-between w-full pt-4 *:max-w-[45%]";
const StyledSection = "flex flex-col gap-3 w-full p-8";
const StyledSectionTitle = "text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200";

type ProfileInfoProps = { user: User; editing: boolean; body: UpdateUser["body"]; setBody: React.Dispatch<React.SetStateAction<UpdateUser["body"]>> };

const ProfileInfo = ({ user, editing, body, setBody }: ProfileInfoProps) => {
  const getLabel = useLabels();

  const onChange = ({ field, value }: OnInfoChange) => {
    setBody((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <div className={StyledSections}>
        <div className={StyledSection}>
          <h2 className={StyledSectionTitle}>{getLabel("user-profile.personal-info")}</h2>
          <PersonalInfo
            editing={editing}
            user={user}
            body={body}
            onChange={onChange}
          />
        </div>
        <div className={StyledSection}>
          <h2 className={StyledSectionTitle}>{getLabel("user-profile.company-info")}</h2>
          <CompanyInfo
            editing={editing}
            user={user}
            body={body}
            onChange={onChange}
            />
        </div>
      </div>
      <div className={StyledSection}>
        <h2 className={StyledSectionTitle}>{getLabel("user-profile.change-password")}</h2>
        <Passwords editing={editing} body={body} onChange={onChange} />
      </div>
    </>
  );
};

export default ProfileInfo;

