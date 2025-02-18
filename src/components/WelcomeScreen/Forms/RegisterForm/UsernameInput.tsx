import { Input } from "src/shared/components";
import usernameIcon from "public/user-login/username.svg";
import Submit from "../Submit";

import { useLabels } from "src/services/client";
import { ValidationService } from "src/services";

import type { UsernameInput } from "../types";

const StyledContainer = "relative flex items-end gap-4 w-full";
const StyledInput =
  "[&_label]:text-slate-200 [&_input]:text-slate-200 text-slate-200 [&_input]:!pr-10";

const UsernameInput = ({ username, setUsername, next }: UsernameInput) => {
  const getLabel = useLabels();

  return (
    <div className={StyledContainer}>
      <Input
        required
        autoFocus
        value={username}
        name="username"
        icon={usernameIcon}
        onEnterKey={next}
        onChange={setUsername}
        className={StyledInput}
        tooltipLabel="user-login.email-tooltip"
        label={getLabel("user-login.username-email")}
        placeholder={getLabel("user-login.username-email-placeholder")}
        validations={[(value) => ValidationService.checkLength(4, value)]}
      />
      <Submit onClick={next} disabled={username.length <= 3} />
    </div>
  );
};

export default UsernameInput;
