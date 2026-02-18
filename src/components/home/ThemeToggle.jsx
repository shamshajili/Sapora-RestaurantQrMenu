import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="
        w-10 h-10
        flex items-center justify-center
        rounded-xl
        bg-black/10 dark:bg-white/10
        backdrop-blur
        transition
      "
    >
      {dark ? (
        <FiMoon className="text-[#C9A24D] text-xl" />   
      ) : (
        <FiSun className="text-[#C9A24D] text-xl" />    
      )}
    </button>
  );
};

export default ThemeToggle;
