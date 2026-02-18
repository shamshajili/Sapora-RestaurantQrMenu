import { FiInstagram, FiLink } from "react-icons/fi";
import { useState } from "react";

const SocialLinks = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex items-center justify-center gap-6 mt-2">

      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="transition duration-200 hover:scale-110"
      >
        <FiInstagram
          size={22}
          className="
            text-[#C9A24D]              /* GOLD */
            hover:text-[#E6C97A]        /* lighter gold hover */
            transition
          "
        />
      </a>

      <button
        onClick={handleCopy}
        aria-label="Linki kopyala"
        className="transition duration-200 hover:scale-110 focus:outline-none"
      >
        <FiLink
          size={22}
          className="
            text-[#C9A24D]              /* GOLD */
            hover:text-[#E6C97A]
            transition
          "
        />
      </button>

      {copied && (
        <span className="text-xs text-[#C9A24D] tracking-wide">
          Kopyalandı
        </span>
      )}
    </div>
  );
};

export default SocialLinks;
