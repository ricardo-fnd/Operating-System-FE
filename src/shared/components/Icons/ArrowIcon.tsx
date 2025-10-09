const StyledArrow = "w-6 h-6 text-gray-400 group-hover:text-white transition-colors";

const ArrowIcon = () => (
  <svg className={StyledArrow} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default ArrowIcon;

