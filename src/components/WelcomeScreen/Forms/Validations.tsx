import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { VscError } from "react-icons/vsc";

import { useLabels } from "src/services/client";

import type { Validations } from "../types";

const StyledValidations = "flex flex-col gap-2 w-full";
const StyledValidation = "flex items-center gap-2 self-start text-sm ml-1";

const Validations = ({ username, password, confirmPassword }: Validations) => {
  const getLabel = useLabels();

  const match = password && confirmPassword && password === confirmPassword;

  return (
    <div className={StyledValidations}>
      <div className={StyledValidation}>
        <ValidationImage passed={username.length > 2} />
        <p>{getLabel("user-login.register.username-length")}</p>
      </div>
      <div className={StyledValidation}>
        <ValidationImage passed={password.length > 4} />
        <p>{getLabel("user-login.register.password-length")}</p>
      </div>
      <div className={StyledValidation}>
        <ValidationImage passed={!!match} />
        <p>{getLabel("user-login.register.password-match")}</p>
      </div>
    </div>
  );
};

const ValidationImage = ({ passed }: { passed: boolean }) => {
  if (passed) return <IoIosCheckmarkCircleOutline size={20} color="green" />;
  return <VscError size={20} color="red" />;
};

export default Validations;
