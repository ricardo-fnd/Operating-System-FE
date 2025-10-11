import type { IconProps } from "./types";

const StyledHome = "group-hover:opacity-90 transition-opacity";

const HomeIcon = ({ width = 18, height = 18, color = "black", className = "", ...props }: IconProps) => (
  <svg
    className={`${StyledHome} ${className}`.trim()}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    {...props}
  >
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);

export default HomeIcon;

