import type { IconProps } from "./types";

const StyledBackward = "group-hover:opacity-90 transition-opacity";

const BackwardIcon = ({ width = 18, height = 18, color = "black", className = "", ...props }: IconProps) => (
  <svg 
    className={`${StyledBackward} ${className}`.trim()} 
    width={width} 
    height={height} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    {...props}
  >
    <path d="M19 12H5m0 0l7-7m-7 7l7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export { BackwardIcon };

