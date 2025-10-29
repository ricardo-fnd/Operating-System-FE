import type { IconProps } from "./types";

const StyledTextFile = "group-hover:opacity-90 transition-opacity";

const TextFileIcon = ({ width = 18, height = 18, color = "black", className = "", ...props }: IconProps) => (
  <svg
    className={`${StyledTextFile} ${className}`.trim()}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    {...props}
  >
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" stroke="currentColor" strokeWidth="1" fill="none"/>
  </svg>
);

export { TextFileIcon };
