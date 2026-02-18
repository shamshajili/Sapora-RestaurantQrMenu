const FeedbackButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        h-16 md:h-14
        rounded-2xl
        border border-neutral-300/40 dark:border-neutral-600/40
        bg-white/70 dark:bg-neutral-800/70
        backdrop-blur
        font-medium
        tracking-wide
        transition
        duration-200
        active:scale-[0.98]
        hover:bg-white dark:hover:bg-neutral-700
        focus:outline-none focus:ring-2 focus:ring-neutral-400/40
        text-lg md:text-base
      "
      aria-label="Menyuya keçin"
    >
      <span className="
        bg-gradient-to-r
        from-[#F5E6B3]
        via-[#C9A24D]
        to-[#8F6B1F]
        bg-clip-text
        text-transparent
      ">
        Rəy bildirin
      </span>
    </button>
  );
};

export default FeedbackButton;
