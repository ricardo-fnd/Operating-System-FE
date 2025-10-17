import type { IconProps } from "src/shared/components/Icons/types";

const StyledOpenEye = "group-hover:opacity-90 transition-opacity";

const OpenEyeIcon = ({ width = 18, height = 18, color = "black", className = "", ...props }: IconProps) => (
  <svg
    className={`${StyledOpenEye} ${className}`.trim()}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    {...props}
  >
    <path
      d="M12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle
      cx="12"
      cy="12.5"
      r="3"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle
      cx="12"
      cy="12.5"
      r="1.5"
      fill="currentColor"
    />
  </svg>
);

export default OpenEyeIcon;

