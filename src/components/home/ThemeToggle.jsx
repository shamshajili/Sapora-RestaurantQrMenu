import { FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  return (
    <div
      className="
        w-9 h-9
        flex items-center justify-center
        rounded-xl
        bg-white/10 dark:bg-neutral-800/30
        backdrop-blur
        transition
      "
    >
      <FiMoon
        size={16}
        className="
          text-[#C9A24D]
        "
      />
    </div>
  );
};

export default ThemeToggle;
