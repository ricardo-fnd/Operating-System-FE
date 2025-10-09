import { Input } from "src/shared/components";
import lockIcon from "public/user-login/lock.svg";

import { useLabels } from "src/services/client";
import { ValidationService } from "src/services";

import type { Inputs } from "./types";

const StyledInputs = "flex flex-col gap-6 w-full";

const Inputs = ({
  submit,
  password,
  passwordConfirmation,
  setPassword,
  setPasswordConfirmation,
}: Inputs) => {
  const getLabel = useLabels();

  return (
    <div className={StyledInputs}>
      <Input
        required
        autoFocus
        theme="dark"
        name="password"
        type="password"
        value={password}
        icon={lockIcon}
        onEnterKey={submit}
        onChange={setPassword}
        tooltipLabel="commons.password-tooltip"
        label={getLabel("commons.password")}
        placeholder={getLabel("commons.password-placeholder")}
        validations={[(value) => ValidationService.checkLength(5, value)]}
      />
      <Input
        required
        theme="dark"
        type="password"
        name="confirm-password"
        value={passwordConfirmation}
        icon={lockIcon}
        onEnterKey={submit}
        onChange={setPasswordConfirmation}
        label={getLabel("commons.confirm-password")}
        placeholder={getLabel("commons.confirm-password-placeholder")}
        validations={[(value) => !!value && password === value]}
      />
    </div>
  );
};

export default Inputs;
