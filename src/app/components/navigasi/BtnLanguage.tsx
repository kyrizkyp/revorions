import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface BtnLanguageProps {
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
  colorsLang: string;
}

const BtnLanguage: React.FC<BtnLanguageProps> = ({
  isDropdownOpen,
  toggleDropdown,
  colorsLang,
}) => {
  const languages = ["en", "id"];
  const router = useRouter();

  const [currentLang, setCurrentLang] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("i18nlang");
      if (storedLang && languages.includes(storedLang)) {
        setCurrentLang(storedLang);
      } else {
        setCurrentLang(languages[0]);
      }
    }
  }, []);

  useEffect(() => {
    if (currentLang) {
      const urlLang = window.location.pathname.split("/")[1];
      if (urlLang !== currentLang) {
        const newPath = window.location.pathname.replace(
          /^\/(en|id)/,
          `/${currentLang}`
        );
        router.push(newPath);
      }
    }
  }, [currentLang, router]);

  const changeLanguage = (newLocale: string) => {
    localStorage.setItem("i18nlang", newLocale);
    setCurrentLang(newLocale);
    toggleDropdown();
  };

  return (
    <div className="relative flex items-center justify-center">
      <button onClick={toggleDropdown}>
        {currentLang && (
          <Image
            src={`/images/lang/${currentLang}.png`}
            alt={`${currentLang} flag`}
            width={24}
            height={24}
            className={`border-2 ${colorsLang} rounded-[4px]`}
          />
        )}
      </button>

      <div
        className={`absolute w-10 top-full my-2 bg-white overflow-hidden transition-all duration-500 ease-in-out ${
          isDropdownOpen ? "max-h-[80px]" : "max-h-0"
        }`}
      >
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => changeLanguage(lang)}
            className="p-2 hover:bg-gray-200"
          >
            <Image
              src={`/images/lang/${lang}.png`}
              alt="lang"
              width={30}
              height={30}
              className="border-2 border-black rounded-[4px]"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default BtnLanguage;
