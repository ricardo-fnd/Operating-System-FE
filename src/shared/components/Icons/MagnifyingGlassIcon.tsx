import type { IconProps } from "./types";

const StyledMagnifyingGlass = "group-hover:opacity-90 transition-opacity";

const MagnifyingGlassIcon = ({ width = 18, height = 18, color = "black", className = "", ...props }: IconProps) => (
  <svg
    className={`${StyledMagnifyingGlass} ${className}`.trim()}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    {...props}
  >
    <path d="M10 2a8 8 0 105.3 14l4.4 4.3a1 1 0 001.4-1.4l-4.3-4.4A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"/>
  </svg>
);

export default MagnifyingGlassIcon;

