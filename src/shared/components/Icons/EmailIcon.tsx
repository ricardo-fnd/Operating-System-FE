import type { IconProps } from "./types";

const StyledEmail = "group-hover:opacity-90 transition-opacity";

const EmailIcon = ({
  width = 18,
  height = 18,
  color = "black",
  className = "",
  ...props
}: IconProps) => (
  <svg
    className={`${StyledEmail} ${className}`.trim()}
    width={width}
    height={height}
    viewBox="0 0 26 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    {...props}
  >
    <path
      d="M3 3H23C24.1 3 25 3.9 25 5V17C25 18.1 24.1 19 23 19H3C1.9 19 1 18.1 1 17V5C1 3.9 1.9 3 3 3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25 5L13 12L1 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EmailIcon;

