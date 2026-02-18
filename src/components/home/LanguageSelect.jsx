import { FiGlobe } from "react-icons/fi";

const LanguageSelect = () => {
  return (
    <div className="w-12 h-12 md:w-10 md:h-10 cursor-pointer flex items-center justify-center rounded-xl bg-white/10 dark:bg-neutral-800/30 backdrop-blur">
      <FiGlobe className="text-[#C9A24D] text-2xl md:text-base" />
    </div>
  );
};

export default LanguageSelect;
