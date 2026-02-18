import { useLanguage } from "../../context/LanguageContext";

const FeedbackButton = ({ onClick }) => {
  const { t } = useLanguage();

  return (
    <button
      onClick={onClick}
      className="
        w-full h-12
        rounded-2xl
        transition-all duration-200
        backdrop-blur
        active:scale-[0.98]

        /* LIGHT MODE */
        bg-[#FFFCF6]
        border border-[#E6D3A3]
        shadow-[0_4px_12px_rgba(201,162,77,0.15)]

        /* DARK MODE */
        dark:bg-neutral-800/70
        dark:border-white/10
        dark:shadow-none
      "
      aria-label={t.feedback}
    >
      <span
        className="
          bg-gradient-to-r
          from-[#E9C46A]
          via-[#C9A24D]
          to-[#9C7A2F]
          bg-clip-text
          text-transparent
          font-medium
        "
      >
        {t.feedback}
      </span>
    </button>
  );
};

export default FeedbackButton;
