import { Input } from "src/shared/components";

import { useLabels } from "src/services/client";

import type { CompanyInfo } from "../types";

const CompanyInfo = ({ editing, user, body, onChange }: CompanyInfo) => {
  const getLabel = useLabels();

  return (
    <>
      <Input
        name="user-company-name"
        disabled={!editing}
        value={body.companyName ?? user.companyName ?? ""}
        onChange={(value) => onChange({ field: "companyName", value })}
        label={getLabel("user-profile.company")}
        placeholder={getLabel("user-profile.company-placeholder")}
      />
      <Input
        name="user-job"
        disabled={!editing}
        value={body.job ?? user.job ?? ""}
        onChange={(value) => onChange({ field: "job", value })}
        label={getLabel("user-profile.job")}
        placeholder={getLabel("user-profile.job-placeholder")}
      />
    </>
  );
};

export default CompanyInfo;
