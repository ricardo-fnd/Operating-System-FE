import { Input } from "src/shared/components";
import { PasswordTooltip } from "src/shared/components/Inputs";

import { useLabels } from "src/services/client";

import type { Passwords } from "../types";

const StyledPasswords = "relative flex gap-2 items-end";
const StyledTooltip = "right-1/2 -translate-x-1/2";

const Passwords = ({ editing, body, onChange }: Passwords) => {
  const getLabel = useLabels();

  return (
    <div className={StyledPasswords}>
      <Input
        type="password"
        name="password"
        disabled={!editing}
        value={body.password ?? ""}
        onChange={(value) => onChange({ field: "password", value })}
        label={getLabel("commons.password-placeholder")}
        placeholder={getLabel("commons.password-placeholder")}
      />
      <Input
        type="password"
        name="password-confirmation"
        disabled={!editing}
        value={body.passwordConfirmation ?? ""}
        onChange={(value) => onChange({ field: "passwordConfirmation", value })}
        placeholder={getLabel("commons.confirm-password-placeholder")}
      />
      <PasswordTooltip place="top" className={StyledTooltip} />
    </div>
  );
};

export default Passwords;
