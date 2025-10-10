'use client';
import { useRouter } from "next/navigation";

import { useLabels } from "src/services/client";

const StyledHeader = "flex items-center justify-between h-[60px] min-h-[60px] px-6 border-b border-gray-800";
const StyledLogo = "flex items-center gap-2 text-white font-semibold text-lg cursor-pointer";
const StyledSystemInfo = "flex items-center gap-4 text-sm text-gray-400";
const StyledStatus = "hidden items-center gap-2 xs:flex";
const StyledStatusOnline = "text-green-500";

const Header = () => {
  const getLabel = useLabels();
  const router = useRouter();

  return (
    <header className={StyledHeader}>
      <div className={StyledLogo} onClick={() => router.push("/")}>
        <LogoIcon />
        <span>BrowserOS</span>
      </div>
      <div className={StyledSystemInfo}>
        <div className={StyledStatus}>
          <span>{getLabel("welcome-screen.header.system-status")}:</span>
          <span className={StyledStatusOnline}>Online</span>
        </div>
        <span>{getLabel("project.version", { version: "1.0.0" })}</span>
      </div>
    </header>
  );
};

const LogoIcon = () => (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
        fill="white"
      />
    </svg>
  );

export default Header;

