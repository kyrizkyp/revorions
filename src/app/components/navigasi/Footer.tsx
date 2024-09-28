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
    { name: "INSTAGRAM", url: "/instagram" },
    { name: "TIKTOK", url: "/tiktok" },
  ];

  return (
    <div
      className={`h-fullw-full p-4 flex flex-col md:flex-row justify-between ${bgColor}`}
    >
      <div className="w-full md:w-1/2">
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
                <p className="font-mono text-sm">ID 082345678345</p>
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
              openSection === "followUs" ? "max-h-[74px]" : "max-h-0"
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

      <div className="w-full md:w-1/2">
        <p className={textColor}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi id
          voluptas numquam! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Odit facilis officia, neque aperiam incidunt cumque culpa
          ducimus atque. Aspernatur, necessitatibus?
        </p>
      </div>
    </div>
  );
};

export default Footer;
