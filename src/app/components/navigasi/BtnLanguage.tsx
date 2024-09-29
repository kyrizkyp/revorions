import React, { useEffect, useState } from "react";

const BtnLanguage = () => {
  const [currentLang, setCurrentLang] = useState("");

  const languages = ["en", "id"];

  useEffect(() => {
    const storedLang = localStorage.getItem("i18nlang");
    if (storedLang && languages.includes(storedLang)) {
      setCurrentLang(storedLang);

      const urlLang = window.location.pathname.split("/")[1];
      if (urlLang !== storedLang) {
        const newPath = window.location.pathname.replace(
          /^\/(en|id)/,
          `/${storedLang}`
        );
        window.location.href = newPath;
      }
    }
  }, []);

  const changeLanguage = (newLocale: string) => {
    localStorage.setItem("i18nlang", newLocale);
    setCurrentLang(newLocale);

    const newPath = window.location.pathname.replace(
      /^\/(en|id)/,
      `/${newLocale}`
    );
    window.location.href = newPath;
  };

  return (
    <div>
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => changeLanguage(lang)}
          className={`px-1 ${currentLang === lang ? "font-bold" : ""}`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default BtnLanguage;
