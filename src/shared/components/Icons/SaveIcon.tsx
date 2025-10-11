import type { IconProps } from "./types";

const StyledSave = "group-hover:opacity-90 transition-opacity";

const SaveIcon = ({ width = 18, height = 18, color = "black", className = "", ...props }: IconProps) => (
  <svg
    className={`${StyledSave} ${className}`.trim()}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color }}
    {...props}
  >
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default SaveIcon;

