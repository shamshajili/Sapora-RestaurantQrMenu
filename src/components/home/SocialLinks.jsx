import { FiInstagram, FiLink } from "react-icons/fi";
import { useState } from "react";

const SocialLinks = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="flex items-center justify-center gap-2 md:gap-4 mt-1 md:mt-2">

      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiInstagram className="text-[#C9A24D] w-6 h-6 md:w-8 md:h-8" />
      </a>

      <button onClick={handleCopy}>
        <FiLink className="text-[#C9A24D] w-6 h-6 md:w-8 md:h-8" />
      </button>

      {copied && (
        <span className="text-sm md:text-base text-[#C9A24D] ml-1">
          Kopyalandı
        </span>
      )}

    </div>
  );
};

export default SocialLinks;
