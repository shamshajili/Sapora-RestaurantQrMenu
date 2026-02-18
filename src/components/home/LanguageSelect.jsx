import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import azFlag from "../../assets/images/az.png";
import gbFlag from "../../assets/images/en.png";
import ruFlag from "../../assets/images/ru.png";

const languages = [
  { code: "AZ", flag: azFlag },
  { code: "EN", flag: gbFlag },
  { code: "RU", flag: ruFlag },
];

const LanguageSelect = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(languages[0]);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2
          px-3 py-2
          rounded-xl
          bg-white dark:bg-neutral-800/40
          border border-[#C9A24D]/40
          text-[#C9A24D]
          font-medium
        "
      >
        {current.code}
        <FiChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="
            absolute right-0 mt-2 w-52
            rounded-2xl
            bg-white dark:bg-neutral-900
            border border-[#C9A24D]/30
            shadow-xl
            z-50
          "
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setCurrent(lang);
                setOpen(false);
              }}
              className="
                w-full flex items-center gap-3
                px-4 py-3
                hover:bg-[#C9A24D]/10
                transition
              "
            >
              <img
                src={lang.flag}
                alt={lang.code}
                className="w-5 h-5 rounded-sm"
              />

              <div className="flex flex-col text-left">
                <span className="text-[#C9A24D] font-medium">
                  {lang.code}
                </span>
                <span className="text-[#C9A24D]/80 text-sm">
                  {lang.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
