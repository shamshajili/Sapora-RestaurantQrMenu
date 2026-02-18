import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  AZ: {
    feedback: "Rəy bildirin",
    menu: "Menyuya baxın",
    copied: "Kopyalandı",
  },
  EN: {
    feedback: "Leave a review",
    menu: "View menu",
    copied: "Copied",
  },
  RU: {
    feedback: "Оставить отзыв",
    menu: "Посмотреть меню",
    copied: "Скопировано",
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("AZ");

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
