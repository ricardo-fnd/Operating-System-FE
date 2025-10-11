import { Input } from "src/shared/components";

import { useLabels } from "src/services/client";

import type { Passwords } from "../types";

const StyledPasswords = "relative flex gap-2 justify-between items-end *:max-w-[45%]";

const Passwords = ({ editing, body, onChange }: Passwords) => {
  const getLabel = useLabels();

  return (
    <div className={StyledPasswords}>
      <Input
        type="password"
        name="password"
        disabled={!editing}
        value={body.password ?? ""}
        tooltipLabel="commons.password-tooltip"
        label={getLabel("commons.password-placeholder")}
        placeholder={getLabel("commons.password-placeholder")}
        onChange={(value) => onChange({ field: "password", value })}
      />
      <Input
        type="password"
        name="password-confirmation"
        disabled={!editing}
        value={body.passwordConfirmation ?? ""}
        placeholder={getLabel("commons.confirm-password-placeholder")}
        onChange={(value) => onChange({ field: "passwordConfirmation", value })}
      />
    </div>
  );
};

export default Passwords;
