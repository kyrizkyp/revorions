"use client";

import { IconDotsVertical } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";

interface FooterProps {
  bgColor: string;
  textColor: string;
}

const Footer: React.FC<FooterProps> = ({ bgColor, textColor }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  const socialLinks = [
    {
      name: "INSTAGRAM",
      url: "https://www.instagram.com/revorions/?igsh=MWQ0MmdlNnI2cmNwMw%3D%3D",
    },
    {
      name: "TIKTOK",
      url: "https://www.tiktok.com/@revorions?_t=8q7ZqkI9x6G&_r=1",
    },
    { name: "YOUTUBE", url: "https://www.youtube.com/@revorions" },
  ];

  return (
    <div
      className={`h-full w-full p-4 flex flex-col md:flex-row items-center md:items-start justify-between ${bgColor}`}
    >
      <div className="w-full md:max-w-4xl mx-auto">
        <div
          className={`py-2 w-full cursor-pointer ${textColor}`}
          onClick={() => toggleSection("contact")}
        >
          <div className="w-full flex items-center justify-between">
            <div className="text-left">
              <h1 className="font-mono">CONTACT</h1>
            </div>

            <IconDotsVertical className="w-4 h-4" />
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openSection === "contact" ? "max-h-[74px]" : "max-h-0"
            }`}
          >
            <div className="p-4">
              <div className="py-[2px]">
                <p className="font-mono text-sm">ID +62</p>
              </div>

              <div className="py-[2px]">
                <a href="/email" target="_blank" className="font-mono text-sm">
                  EMAIL US
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`py-2 w-full cursor-pointer ${textColor}`}
          onClick={() => toggleSection("followUs")}
        >
          <div className="w-full flex items-center justify-between">
            <div className="text-left">
              <h2 className="font-mono">FOLLOW US</h2>
            </div>

            <IconDotsVertical className="w-4 h-4" />
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openSection === "followUs" ? "max-h-[86px]" : "max-h-0"
            }`}
          >
            <div className="p-2">
              {socialLinks.map((link, index) => (
                <div key={index} className="py-[2px]">
                  <a
                    href={link.url}
                    target="_blank"
                    className="font-mono text-xs"
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`py-2 ${textColor}`}>
          <Link href="" className="font-mono">
            BRAND ORIGIN
          </Link>
        </div>
      </div>

      <div className="w-full md:max-w-4xl mx-auto">
        <p className={textColor}></p>
      </div>
    </div>
  );
};

export default Footer;
