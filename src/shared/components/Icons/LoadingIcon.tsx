import type { IconProps } from "./types";

const LoadingIcon = ({ 
  width = 28, 
  height = 28, 
  color = "#0E91FF", 
  className = "", 
  ...props 
}: IconProps) => {
  const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 200"
      width={width}
      height={height}
      className={className}
      {...props}
    >
      <radialGradient id={gradientId} cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)">
        <stop offset="0" stopColor={color}></stop>
        <stop offset=".3" stopColor={color} stopOpacity=".9"></stop>
        <stop offset=".6" stopColor={color} stopOpacity=".6"></stop>
        <stop offset=".8" stopColor={color} stopOpacity=".3"></stop>
        <stop offset="1" stopColor={color} stopOpacity="0"></stop>
      </radialGradient>
      <circle 
        fill="none" 
        stroke={`url(#${gradientId})`} 
        strokeWidth="15" 
        strokeLinecap="round" 
        strokeDasharray="200 1000" 
        strokeDashoffset="0" 
        cx="100" 
        cy="100" 
        r="70"
        style={{ transformOrigin: "center" }}
      >
        <animateTransform 
          type="rotate" 
          attributeName="transform" 
          calcMode="spline" 
          dur="2" 
          values="360;0" 
          keyTimes="0;1" 
          keySplines="0 0 1 1" 
          repeatCount="indefinite"
        />
      </circle>
      <circle 
        fill="none" 
        opacity=".2" 
        stroke={color} 
        strokeWidth="15" 
        strokeLinecap="round" 
        cx="100" 
        cy="100" 
        r="70"
        style={{ transformOrigin: "center" }}
      />
      <span className="sr-only">Loading...</span>
    </svg>
  );
};

export { LoadingIcon };

