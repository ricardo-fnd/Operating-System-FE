import { Button } from "src/shared/components/Buttons";

import { useLabels } from "src/services/client";

const StyledButton =
  "mt-20 px-10 py-1.5 border !bg-transparent !text-white transition-scale duration-300 hover:scale-105";

const Register = ({ onClick }: { onClick: () => void }) => {
  const getLabel = useLabels();

  return (
    <Button onClick={onClick} className={StyledButton}>
      {getLabel("user-login.register")}
    </Button>
  );
};

export default Register;
