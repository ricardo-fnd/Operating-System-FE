import { useLabels } from "src/services/client";

const StyledParagraph =
  "[&>span]:font-medium [&>span]:cursor-pointer [&>span]:text-blue-600 [&>span]:hover:underline";

const RegisterTip = ({ onClick }: { onClick: () => void }) => {
  const getLabel = useLabels();

  return (
    <p className={StyledParagraph}>
      {`${getLabel("user-login.register")} `}
      <span onClick={onClick}>{getLabel("user-login.register-click")}</span>
    </p>
  );
};

export default RegisterTip;
