"use client";

import React from "react";
import { IconChevronLeft } from "@tabler/icons-react";
import { useDictionary } from "../DictionaryProvider";
import Link from "next/link";

const Authenticity = () => {
  const t = useDictionary();
  return (
    <div className="w-full px-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center md:justify-between">
        <Link
          href="/"
          className="flex items-center font-mono font-bold self-start lg:self-auto py-8 lg:py-0"
        >
          <IconChevronLeft className="w-4 h-4" />
          BACK
        </Link>

        <div className="flex items-start gap-10 xl:gap-32">
          <div className="text-left">
            <h1 className="font-mono font-bold">{t.authenticity.title1}</h1>
            <p className="font-mono text-sm">&lsquo;PAGE&lsquo;</p>
          </div>

          <div className="max-w-xl xl:max-w-2xl">
            <p className="font-mono text-sm">{t.authenticity.desc1}</p>
          </div>
        </div>

        <div className="self-end lg:self-auto px-0 lg:px-2 pt-8 lg:pt-0">
          <p className="font-mono font-bold text-sm">&lsquo;RV24&lsquo;-25</p>
        </div>
      </div>
    </div>
  );
};

export default Authenticity;
