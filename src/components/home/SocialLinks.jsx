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
    <div className="flex items-center justify-center gap-3 mt-1">

      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiInstagram className="text-[#C9A24D] text-2xl" />
      </a>

      <button onClick={handleCopy}>
        <FiLink className="text-[#C9A24D] text-2xl" />
      </button>

      {copied && (
        <span className="text-xs text-[#C9A24D] ml-1">
          Kopyalandı
        </span>
      )}
    </div>
  );
};

export default SocialLinks;
