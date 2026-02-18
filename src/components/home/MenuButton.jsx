const MenuButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        h-11 md:h-14
        rounded-2xl
        border border-neutral-300/40 dark:border-neutral-600/40
        bg-white/70 dark:bg-neutral-800/70
        backdrop-blur
        transition
        text-base md:text-lg
        focus:outline-none focus:ring-2 focus:ring-neutral-400/40
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
        font-medium
      ">
        Menuya baxın
      </span>
    </button>
  );
};

export default MenuButton;
 
