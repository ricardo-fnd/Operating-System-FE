import { useLabels } from "src/services/client";

const StyledTitle = "text-3xl text-center font-semibold text-white mb-2";
const StyledSubtitle = "text-gray-400 text-center text-sm mb-8";

const WelcomeTitle = () => {
  const getLabel = useLabels();

  return (
    <>
      <CloudIcon />
      <h1 className={StyledTitle}>{getLabel("welcome-screen.title")}</h1>
      <p className={StyledSubtitle}>{getLabel("welcome-screen.subtitle")}</p>
    </>
  );
};

const CloudIcon = () => (
    <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-16 h-16 mb-2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
        fill="white"
      />
    </svg>
  );
  

export default WelcomeTitle;

