const StyledCloseButton =
  "absolute top-2 right-2 text-gray-600 hover:text-gray-800";

const CloseButton = ({ onClick }: { onClick: () => void }) => (
  <button className={StyledCloseButton} onClick={onClick}>
    ✖
  </button>
);

export default CloseButton;
