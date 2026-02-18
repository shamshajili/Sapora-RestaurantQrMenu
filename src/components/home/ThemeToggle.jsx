import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved) {
      setTheme(saved);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Theme toggle"
      className="
        w-10 h-10
        flex items-center justify-center
        rounded-xl
        bg-black/10 dark:bg-white/10
        backdrop-blur
        transition
        hover:scale-105
        active:scale-95
      "
    >
      {theme === "dark" ? (
        <FiMoon className="text-[#C9A24D] text-xl" />
      ) : (
        <FiSun className="text-[#C9A24D] text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
