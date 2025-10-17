import { Input, LockIcon } from "src/shared/components";

import { useLabels } from "src/services/client";
import { ValidationService } from "src/services";

import type { Inputs } from "./types";

const StyledInputs = "flex flex-col gap-6 w-full";
const StyledInputWrapper = "relative w-full [&_input]:pl-8";
const StyledLockIcon = "absolute bottom-[14px] left-1";

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
      <div className={StyledInputWrapper}>
        <LockIcon color="white" className={StyledLockIcon} />
        <Input
          required
          autoFocus
          theme="dark"
          name="password"
          type="password"
          value={password}
          onEnterKey={submit}
          onChange={setPassword}
          tooltipLabel="commons.password-tooltip"
          label={getLabel("commons.password")}
          placeholder={getLabel("commons.password-placeholder")}
          validations={[(value) => ValidationService.checkLength(5, value)]}
        />
      </div>
      <div className={StyledInputWrapper}>
        <LockIcon color="white" className={StyledLockIcon} />
        <Input
          required
          theme="dark"
          type="password"
          name="confirm-password"
          value={passwordConfirmation}
          onEnterKey={submit}
          onChange={setPasswordConfirmation}
          label={getLabel("commons.confirm-password")}
          placeholder={getLabel("commons.confirm-password-placeholder")}
          validations={[(value) => !!value && password === value]}
        />
      </div>
    </div>
  );
};

export default Inputs;
