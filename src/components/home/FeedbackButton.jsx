const FeedbackButton = () => {
  return (
    <button
  className="
    w-full
    h-11 md:h-12
    rounded-2xl
    border border-neutral-300/40 dark:border-neutral-600/40
    bg-white/70 dark:bg-neutral-800/70
    backdrop-blur
    transition
      text-base md:text-lg
  "
>

      <span className="
        bg-gradient-to-r
        from-[#F5E6B3]
        via-[#C9A24D]
        to-[#8F6B1F]
        bg-clip-text
        text-transparent
        font-medium
      ">
        Rəy bildirin
      </span>
    </button>
  );
};

export default FeedbackButton;
