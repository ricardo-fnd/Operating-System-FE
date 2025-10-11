import { Button, BackwardIcon } from "src/shared/components";

const StyledBack = "absolute left-10 top-10 p-2";

const BackButton = ({ onClick }: { onClick: () => void }) => (
  <Button onClick={onClick} className={StyledBack}>
    <BackwardIcon color="white" />
  </Button>
);

export default BackButton;
