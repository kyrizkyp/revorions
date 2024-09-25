"use client";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Notification from "./Notification";

interface NavbarProps {
  picture: string;
  pictureScroll: string;
  colorsNavbar: string;
  colorsText: string;
  colorsTextScroll: string;
  colorsIcon: string;
  colorsIconScroll: string;
}

const Navbar: React.FC<NavbarProps> = ({
  picture,
  pictureScroll,
  colorsNavbar,
  colorsText,
  colorsTextScroll,
  colorsIcon,
  colorsIconScroll,
}) => {
  const [openBrand, setBrand] = useState(false);
  const [openItems, setItems] = useState(false);
  const [openMenu, setMenu] = useState(false);
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

  const menuBrand = [
    {
      title: "RV HISTORY NOTES",
      page: "/history",
    },
    {
      title: "THE ARCHIVES",
      page: "/archives",
    },
    {
      title: "ITEM AUTHENTICITY",
      page: "/authenticity",
    },
  ];

  const menuItems = [
    {
      title: "ALL OTHER ITEMS",
      page: "/",
    },
    {
      title: "PLAIN & T-SHIRTS",
      page: "/brand",
    },
    {
      title: "HOODIE & JACKET",
      page: "/items",
    },

    {
      title: "SHORTS & TROUSERS",
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

  const openModalNotif = () => {
    closeMenuClick();
    closeBrandMenu();
    closeItemsMenu();
  };

  const openMenuClick = () => {
    setMenu(!openMenu);
    setAnimationMenu(!animationMenu);
    setBrand(false);
    setItems(false);
  };

  const openBrandMenu = () => {
    setBrand(!openBrand);
    setMenu(false);
    setAnimationMenu(false);
    setItems(false);
  };

  const openItemsMenu = () => {
    setItems(!openItems);
    setMenu(false);
    setAnimationMenu(false);
    setBrand(false);
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
        (openMenu || openBrand || openItems)
      ) {
        closeMenuClick();
        closeBrandMenu();
        closeItemsMenu();
      }
    };

    const clickEsc = (click: { keyCode: number }) => {
      if (click.keyCode === 27 && (openMenu || openBrand || openItems)) {
        closeMenuClick();
        closeBrandMenu();
        closeItemsMenu();
      }
    };

    window.addEventListener("resize", resizeCloseDropdown);
    document.addEventListener("keydown", clickEsc);

    return () => {
      window.removeEventListener("resize", resizeCloseDropdown);
      document.removeEventListener("keydown", clickEsc);
    };
  }, [openMenu, openBrand, openItems]);

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
    <header
      className={`sticky top-0 left-0 right-0 z-10 transition-colors duration-300 ${
        isScrolledPast ? colorsNavbar : ""
      }`}
    >
      <div className="relative flex items-start justify-between p-4">
        <Link
          href="/"
          onClick={() => {
            closeMenuClick();
            closeBrandMenu();
            closeItemsMenu();
          }}
          className="absolute top-[6px] md:top-[2px] left-1/2 transform -translate-x-1/2"
        >
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <img
              src="/logo/rvblack.png"
              alt="Rv"
              className={`absolute m-[6px] transition-opacity duration-700 transform ${
                openMenu || openBrand || openItems ? "opacity-100" : "opacity-0"
              }`}
            />

            <div
              className={`transition-opacity duration-700 transform ${
                openMenu || openBrand || openItems ? "opacity-0" : "opacity-100"
              }`}
            >
              <img
                src={picture}
                alt="Rv"
                className={`absolute m-[6px] transition-opacity duration-700 transform ${
                  isScrolledPast ? "opacity-0" : "opacity-100"
                }`}
              />

              <img
                src={pictureScroll}
                alt="Rv"
                className={`absolute m-[6px] transition-opacity duration-700 transform ${
                  isScrolledPast ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </Link>

        <div
          className={`block xl:hidden ${
            isScrolledPast ? colorsTextScroll : colorsText
          }`}
        >
          <button
            onClick={openMenuClick}
            className={`transform ${
              animationMenu ? "rotate-180" : ""
            } transition duration-700`}
          >
            {openMenu ? (
              <IconX className="stroke-[2.2]" />
            ) : (
              <IconMenu2 className="stroke-[2.2]" />
            )}
          </button>
        </div>

        <div
          className={`hidden xl:block ${
            isScrolledPast ? colorsTextScroll : colorsText
          }`}
        >
          <div className="flex items-start space-x-32">
            <button
              onClick={openBrandMenu}
              className={`font-mono font-bold transition-all duration-700 transform ${
                openMenu || openBrand || openItems ? "text-black" : ""
              }`}
            >
              BRAND
            </button>

            <button
              onClick={openItemsMenu}
              className={`font-mono font-bold transition-all duration-700 transform ${
                openMenu || openBrand || openItems ? "text-black" : ""
              }`}
            >
              LIFESTYLE
            </button>
          </div>
        </div>

        <div
          onClick={openModalNotif}
          className={isScrolledPast ? colorsIconScroll : colorsIcon}
        >
          {openMenu || openBrand || openItems ? (
            <Notification classModalNotif="text-black" />
          ) : (
            <Notification classModalNotif="" />
          )}
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

      <div className={dropdownMenu}>
        <div className="w-full mt-8">
          <div className="w-full">
            <div className="flex flex-col items-start">
              <div className="pb-4">
                <div className="p-[2px]">
                  <p className="font-mono">WORLD OF RV</p>
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
                  <p className="font-mono">LIFESTYLE &lsquo;SOON&lsquo;</p>
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
              <p className="text-[18px]">WORLD OF RV</p>
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
              <p className="text-[18px]">CATEGORY &lsquo;SOON&lsquo;</p>
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
