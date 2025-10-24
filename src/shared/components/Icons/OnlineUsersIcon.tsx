import type { IconProps } from "./types";

const StyledSvg = "inline-block";

const OnlineUsersIcon = ({ width = 18, height = 18, color = "black", className = "", ...props }: IconProps) => (
  <svg
    className={`${StyledSvg} ${className}`.trim()}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    {...props}
  >
    <circle cx="9" cy="7" r="4" stroke={color} strokeWidth="2" />
    <path
      d="M2 21V18C2 16.3431 3.34315 15 5 15H13C14.6569 15 16 16.3431 16 18V21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="17" cy="7" r="3" stroke={color} strokeWidth="2" />
    <path
      d="M17 13H19C20.6569 13 22 14.3431 22 16V21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export { OnlineUsersIcon };

