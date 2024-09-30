"use client";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Notification from "./Notification";
import BtnLanguage from "./BtnLanguage";
import { useDictionary } from "../DictionaryProvider";
import Image from "next/image";

interface NavbarProps {
  picture: string;
  pictureDropdown: string;
  pictureScroll: string;
  colorsLang: string;
  colorsLangDropdown: string;
  colorsLangScroll: string;
  colorsNavbar: string;
  colorsText: string;
  colorsTextDropdown: string;
  colorsTextScroll: string;
}

const Navbar: React.FC<NavbarProps> = ({
  picture,
  pictureDropdown,
  pictureScroll,
  colorsLang,
  colorsLangDropdown,
  colorsLangScroll,
  colorsNavbar,
  colorsText,
  colorsTextDropdown,
  colorsTextScroll,
}) => {
  const [openBrand, setBrand] = useState(false);
  const [openItems, setItems] = useState(false);
  const [openMenu, setMenu] = useState(false);
  const [dropdownLang, setDropdownLang] = useState(false);
  const [animationMenu, setAnimationMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let threshold = 0;

      if (window.matchMedia("(min-width: 1024px)").matches) {
        threshold = 80;
      } else if (window.matchMedia("(min-width: 1280px)").matches) {
        threshold = 100;
      } else {
        threshold = 20;
      }

      setIsScrolledPast(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const t = useDictionary();

  const menuBrand = [
    {
      title: t.navigasi.brand1,
      page: "/history",
    },
    {
      title: t.navigasi.brand2,
      page: "/archives",
    },
    {
      title: t.navigasi.brand3,
      page: "/authenticity",
    },
  ];

  const menuItems = [
    {
      title: t.navigasi.item1,
      page: "/",
    },
    {
      title: t.navigasi.item2,
      page: "/brand",
    },
    {
      title: t.navigasi.item3,
      page: "/items",
    },

    {
      title: t.navigasi.item4,
      page: "/brand",
    },
  ];

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openDropdownLang = () => {
    setDropdownLang(!dropdownLang);
    setBrand(false);
    setItems(false);
    setMenu(false);
    setAnimationMenu(false);
  };

  const closeDropdownLang = () => {
    setDropdownLang(false);
  };

  const openModalNotif = () => {
    closeMenuClick();
    closeBrandMenu();
    closeItemsMenu();
    closeDropdownLang();
  };

  const openMenuClick = () => {
    setMenu(!openMenu);
    setAnimationMenu(!animationMenu);
    setBrand(false);
    setItems(false);
    setDropdownLang(false);
  };

  const openBrandMenu = () => {
    setBrand(!openBrand);
    setMenu(false);
    setAnimationMenu(false);
    setItems(false);
    setDropdownLang(false);
  };

  const openItemsMenu = () => {
    setItems(!openItems);
    setMenu(false);
    setAnimationMenu(false);
    setBrand(false);
    setDropdownLang(false);
  };

  const closeMenuClick = () => {
    setMenu(false);
    setAnimationMenu(false);
  };

  const closeBrandMenu = () => {
    setBrand(false);
  };

  const closeItemsMenu = () => {
    setItems(false);
  };

  useEffect(() => {
    const resizeCloseDropdown = () => {
      if (
        (window.innerWidth <= 768 || window.innerWidth > 768) &&
        (openMenu || openBrand || openItems || dropdownLang)
      ) {
        closeMenuClick();
        closeBrandMenu();
        closeItemsMenu();
        closeDropdownLang();
      }
    };

    const clickEsc = (click: { keyCode: number }) => {
      if (
        click.keyCode === 27 &&
        (openMenu || openBrand || openItems || dropdownLang)
      ) {
        closeMenuClick();
        closeBrandMenu();
        closeItemsMenu();
        closeDropdownLang();
      }
    };

    window.addEventListener("resize", resizeCloseDropdown);
    document.addEventListener("keydown", clickEsc);

    return () => {
      window.removeEventListener("resize", resizeCloseDropdown);
      document.removeEventListener("keydown", clickEsc);
    };
  }, [openMenu, openBrand, openItems, dropdownLang]);

  const dropdownMenu = `fixed flex flex-col bg-white items-center justify-center top-0 left-0 w-full h-[500px] p-2 transform transition-transform duration-700 ease-in-out -z-10 ${
    openMenu ? "translate-y-0" : "-translate-y-full"
  }`;

  const dropdownBrand = `fixed flex flex-col bg-white items-center justify-center top-0 left-0 w-full h-96 xl:h-[500px] p-4 transform transition-transform duration-700 ease-in-out -z-10 ${
    openBrand ? "translate-y-0" : "-translate-y-full"
  }`;

  const dropdownItems = `fixed flex flex-col bg-white items-center justify-center top-0 left-0 w-full h-96 xl:h-[500px] p-4 transform transition-transform duration-700 ease-in-out -z-10 ${
    openItems ? "translate-y-0" : "-translate-y-full"
  }`;
  return (
    <header className="sticky top-0 left-0 right-0 z-10">
      <div
        className={`relative flex items-start justify-between px-4 py-[14px] transition-colors duration-500 ${
          isScrolledPast ? colorsNavbar : ""
        }`}
      >
        <Link
          href="/"
          onClick={() => {
            closeMenuClick();
            closeBrandMenu();
            closeItemsMenu();
            closeDropdownLang();
          }}
          className="absolute top-[6px] md:top-[4px] left-1/2 transform -translate-x-1/2"
        >
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image
              src={isScrolledPast ? pictureScroll : pictureDropdown}
              alt="Rv"
              className={`absolute m-[6px] ${
                openMenu || openBrand || openItems ? "opacity-100" : "opacity-0"
              }`}
              width={300}
              height={200}
            />

            <div
              className={`${
                openMenu || openBrand || openItems ? "opacity-0" : "opacity-100"
              }`}
            >
              <Image
                src={isScrolledPast ? pictureScroll : picture}
                alt="Rv"
                className={`absolute m-[6px] ${
                  isScrolledPast ? "opacity-0" : "opacity-100"
                } ${isScrolledPast ? "opacity-100" : "opacity-0"}`}
                width={300}
                height={200}
              />
            </div>
          </div>
        </Link>

        <div className="block xl:hidden">
          <div className="relative flex items-center justify-center">
            <div
              className={`relative ${
                openMenu || openBrand || openItems ? "opacity-100" : "opacity-0"
              }`}
            >
              <button
                onClick={openMenuClick}
                className={`transform ${
                  animationMenu ? "rotate-180" : ""
                } transition duration-700 ${
                  isScrolledPast ? colorsTextScroll : colorsTextDropdown
                }`}
              >
                {openMenu ? (
                  <IconX className="stroke-[2.2]" />
                ) : (
                  <IconMenu2 className="stroke-[2.2]" />
                )}
              </button>
            </div>

            <div
              className={`absolute ${
                openMenu || openBrand || openItems ? "opacity-0" : "opacity-100"
              }`}
            >
              <button
                onClick={openMenuClick}
                className={`transform ${
                  animationMenu ? "rotate-180" : ""
                } transition duration-700 ${
                  isScrolledPast ? colorsTextScroll : colorsText
                }`}
              >
                {openMenu ? (
                  <IconX className="stroke-[2.2]" />
                ) : (
                  <IconMenu2 className="stroke-[2.2]" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="hidden xl:block">
          <div className="relative flex items-center justify-center">
            <div
              className={`relative ${
                openMenu || openBrand || openItems ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex items-start space-x-32">
                <button
                  onClick={openBrandMenu}
                  className={`font-mono font-bold ${
                    isScrolledPast ? colorsTextScroll : colorsTextDropdown
                  }`}
                >
                  {t.navigasi.brand}
                </button>

                <button
                  onClick={openItemsMenu}
                  className={`font-mono font-bold ${
                    isScrolledPast ? colorsTextScroll : colorsTextDropdown
                  }`}
                >
                  {t.navigasi.lifestyle}
                </button>
              </div>
            </div>

            <div
              className={`absolute ${
                openMenu || openBrand || openItems ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="flex items-start space-x-32">
                <button
                  onClick={openBrandMenu}
                  className={`font-mono font-bold ${
                    isScrolledPast ? colorsTextScroll : colorsText
                  }`}
                >
                  {t.navigasi.brand}
                </button>

                <button
                  onClick={openItemsMenu}
                  className={`font-mono font-bold ${
                    isScrolledPast ? colorsTextScroll : colorsText
                  }`}
                >
                  {t.navigasi.lifestyle}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-center">
          <div className="relative flex items-center justify-center">
            <div
              className={`relative ${
                openMenu || openBrand || openItems ? "opacity-100" : "opacity-0"
              }`}
            >
              <BtnLanguage
                isDropdownOpen={dropdownLang}
                toggleDropdown={openDropdownLang}
                colorsLang={`${
                  isScrolledPast ? colorsLangScroll : colorsLangDropdown
                }`}
              />
            </div>

            <div
              className={`absolute ${
                openMenu || openBrand || openItems ? "opacity-0" : "opacity-100"
              }`}
            >
              <BtnLanguage
                isDropdownOpen={dropdownLang}
                toggleDropdown={openDropdownLang}
                colorsLang={`${isScrolledPast ? colorsLangScroll : colorsLang}`}
              />
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div
              className={`relative ${
                openMenu || openBrand || openItems ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                onClick={openModalNotif}
                className={`${
                  isScrolledPast ? colorsTextScroll : colorsTextDropdown
                }`}
              >
                <Notification />
              </div>
            </div>

            <div
              className={`absolute ${
                openMenu || openBrand || openItems ? "opacity-0" : "opacity-100"
              }`}
            >
              <div
                onClick={openModalNotif}
                className={`${isScrolledPast ? colorsTextScroll : colorsText}`}
              >
                <Notification />
              </div>
            </div>
          </div>
        </div>
      </div>

      {(openMenu || openBrand || openItems) && (
        <div
          className="fixed inset-0 -z-50 bg-black bg-opacity-70"
          onClick={() => {
            closeBrandMenu();
            closeItemsMenu();
            closeMenuClick();
          }}
        />
      )}

      {dropdownLang && (
        <div
          className="fixed inset-0 -z-50"
          onClick={() => {
            closeDropdownLang();
          }}
        />
      )}

      <div className={dropdownMenu}>
        <div className="w-full mt-8">
          <div className="w-full">
            <div className="flex flex-col items-start">
              <div className="pb-4">
                <div className="p-[2px]">
                  <p className="font-mono">{t.navigasi.title1}</p>
                </div>

                <div className="p-[12px] flex flex-col items-start justify-center">
                  {menuBrand.map((menu, urutan) => (
                    <Link
                      key={urutan}
                      href={menu.page}
                      onClick={closeBrandMenu}
                      className="font-mono text-xs py-[6px]"
                    >
                      {menu.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <div className="p-[2px]">
                  <p className="font-mono">{t.navigasi.title2}</p>
                </div>

                <div className="p-[12px] flex flex-col items-start justify-center">
                  {menuItems.map((menu, urutan) => (
                    <p
                      key={urutan}
                      onClick={closeBrandMenu}
                      className="font-mono text-xs py-[6px] text-gray-400"
                    >
                      {menu.title}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={dropdownBrand}>
        <div className="w-full px-4 mt-8">
          <div className="w-full flex flex-col items-start">
            <div className="px-[2px] py-4 font-mono">
              <p className="text-[18px]">{t.navigasi.title1}</p>
            </div>

            <div className="p-4 flex flex-col items-start justify-center">
              {menuBrand.map((menu, urutan) => (
                <Link
                  key={urutan}
                  href={menu.page}
                  onClick={closeBrandMenu}
                  className="py-2 hover:font-bold"
                >
                  <p className="font-mono text-sm">{menu.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={dropdownItems}>
        <div className="w-full px-4 mt-8">
          <div className="w-full flex flex-col items-start">
            <div className="p-[2px] font-mono">
              <p className="text-[18px]">{t.navigasi.title2}</p>
            </div>

            <div className="p-4 flex flex-col items-start justify-center">
              {menuItems.map((menu, urutan) => (
                <p
                  key={urutan}
                  onClick={closeBrandMenu}
                  className="font-mono text-sm py-2 text-gray-400"
                >
                  {menu.title}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
