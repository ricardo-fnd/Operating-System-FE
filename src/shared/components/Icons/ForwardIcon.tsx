import type { IconProps } from "./types";

const StyledForward = "group-hover:opacity-90 transition-opacity";

const ForwardIcon = ({ width = 18, height = 18, color = "black", className = "", ...props }: IconProps) => (
  <svg 
    className={`${StyledForward} ${className}`.trim()} 
    width={width} 
    height={height} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ color }}
    {...props}
  >
    <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default ForwardIcon;

