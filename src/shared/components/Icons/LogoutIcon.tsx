import type { IconProps } from "./types";

const StyledLogout = "group-hover:opacity-90 transition-opacity";

const LogoutIcon = ({ width = 18, height = 18, color = "black", className = "", ...props }: IconProps) => (
  <svg
    className={`${StyledLogout} ${className}`.trim()}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    {...props}
  >
    <path
      d="M12 3V10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M6 8C4.5 9.5 3.8 11.5 3.8 13.5C3.8 16 4.8 18.3 6.6 19.9C8.4 21.5 10.7 22.3 13 22C15.3 21.7 17.3 20.5 18.7 18.7C20.1 16.9 20.8 14.6 20.5 12.3C20.2 10 19 8 17.2 6.6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default LogoutIcon;

