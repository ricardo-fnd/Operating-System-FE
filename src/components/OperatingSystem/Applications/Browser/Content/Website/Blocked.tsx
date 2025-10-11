import { useLabels } from "src/services/client";

// TOPBAR_HEIGHT = 60px
const StyledMessage = "absolute top-0 left-0 flex items-center justify-center w-full h-full text-center p-10";
const StyledMessageContent = "flex flex-col gap-4 max-w-2xl";
const StyledTitle = "text-2xl font-semibold text-slate-700";
const StyledDescription = "text-slate-600";
const StyledLink = "text-blue-600 hover:text-blue-800 underline";

const Blocked = ({ src }: { src: string | null }) => {
  const getLabel = useLabels();

  return (
    <div className={StyledMessage}>
      <div className={StyledMessageContent}>
        <h2 className={StyledTitle}>
          {getLabel("apps.browser.website-blocked.title")}
        </h2>
        <p className={StyledDescription}>
          {getLabel("apps.browser.website-blocked.description-security")}
        </p>
        <p className={StyledDescription}>
          {getLabel("apps.browser.website-blocked.description-instruction")}
        </p>
        <a 
          href={src || ""} 
          target="_blank" 
          rel="noopener noreferrer"
          className={StyledLink}
        >
          {src || ""}
        </a>
      </div>
    </div>
  );
};

export default Blocked;