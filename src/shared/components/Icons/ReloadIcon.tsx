import type { IconProps } from "./types";

const StyledReload = "group-hover:opacity-90 transition-opacity";

const ReloadIcon = ({ width = 18, height = 18, className = "", ...props }: IconProps) => (
  <svg
    className={`${StyledReload} ${className}`.trim()}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
  </svg>
);

export { ReloadIcon };

