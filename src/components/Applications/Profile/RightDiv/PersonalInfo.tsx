import { Input } from "src/shared/components";

import { useLabels } from "src/services/client";

import type { PersonalInfo } from "../types";

const PersonalInfo = ({ editing, body, onChange, user }: PersonalInfo) => {
  const getLabel = useLabels();

  return (
    <>
      <Input
        name="user-name"
        disabled={!editing}
        value={body.name ?? user.name ?? ""}
        onChange={(value) => onChange({ field: "name", value })}
        label={getLabel("user-profile.name-label")}
        placeholder={getLabel("user-profile.name-placeholder")}
      />
      <Input
        name="user-username"
        disabled={!editing}
        value={body.username ?? user.username}
        onChange={(value) => onChange({ field: "username", value })}
        label={getLabel("user-profile.username-label")}
        placeholder={getLabel("user-profile.username-placeholder")}
      />
      <Input
        name="user-email"
        disabled={!editing}
        value={body.email ?? user.email ?? ""}
        onChange={(value) => onChange({ field: "email", value })}
        label={getLabel("user-profile.email-label")}
        placeholder={getLabel("user-profile.email-placeholder")}
      />
    </>
  );
};

export default PersonalInfo;
