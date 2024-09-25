"use client";

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
      className={`h-52 p-4 flex flex-col items-start justify-start ${bgColor}`}
    >
      <div className={`py-2 ${textColor}`}>
        <div
          className="cursor-pointer"
          onClick={() => toggleSection("contact")}
        >
          <h2 className="font-mono font-bold">CONTACT</h2>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openSection === "contact" ? "max-h-[60px]" : "max-h-0"
          }`}
        >
          <div className="p-2">
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

      <div className={`py-2 ${textColor}`}>
        <div
          className="cursor-pointer"
          onClick={() => toggleSection("followUs")}
        >
          <h1 className="font-mono font-bold">FOLLOW US</h1>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openSection === "followUs" ? "max-h-[60px]" : "max-h-0"
          }`}
        >
          <div className="p-2">
            {socialLinks.map((link, index) => (
              <div key={index} className="py-[2px]">
                <a
                  href={link.url}
                  target="_blank"
                  className="font-mono text-sm"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`py-2 ${textColor}`}>
        <Link href="" className="font-mono font-bold">
          BRAND ORIGIN
        </Link>
      </div>
    </div>
  );
};

export default Footer;
