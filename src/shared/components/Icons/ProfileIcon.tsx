import type { IconProps } from "./types";

const StyledProfile = "group-hover:opacity-90 transition-opacity";

const ProfileIcon = ({ width = 18, height = 18, color = "black", className = "", ...props }: IconProps) => (
  <svg
    className={`${StyledProfile} ${className}`.trim()}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    {...props}
  >
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

export default ProfileIcon;

