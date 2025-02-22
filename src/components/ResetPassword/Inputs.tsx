import { Input } from "src/shared/components";
import lockIcon from "public/user-login/lock.svg";

import { useLabels } from "src/services/client";
import { ValidationService } from "src/services";

import type { Inputs } from "./types";

const StyledInputs = "flex flex-col gap-6 w-full";
const StyledInput =
  "[&_label]:text-slate-200 [&_input]:text-slate-200 text-slate-200 [&_input]:!pr-10";

const Inputs = ({
  submit,
  password,
  passwordConfirmation,
  setPassword,
  setPasswordConfirmation,
}: Inputs) => {
  const getLabel = useLabels();

  const onInputChange = (password: string) => {
    setPassword(password);
    setPasswordConfirmation("");
  };

  return (
    <div className={StyledInputs}>
      <Input
        required
        autoFocus
        name="password"
        type="password"
        value={password}
        icon={lockIcon}
        className={StyledInput}
        onEnterKey={submit}
        onChange={onInputChange}
        tooltipLabel="commons.password-tooltip"
        label={getLabel("commons.password")}
        placeholder={getLabel("commons.password-placeholder")}
        validations={[(value) => ValidationService.checkLength(5, value)]}
      />
      <Input
        required
        name="confirm-password"
        type="password"
        value={passwordConfirmation}
        icon={lockIcon}
        className={StyledInput}
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
