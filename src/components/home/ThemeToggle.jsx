import { FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  return (
<div className="
  w-9 h-9
  md:w-14 md:h-14
  flex items-center justify-center
  rounded-xl
  bg-white/10 dark:bg-neutral-800/30
  backdrop-blur
">
  <FiMoon className="text-[#C9A24D] w-4 h-4 md:w-10 md:h-10" />
</div>

  );
};

export default ThemeToggle;
