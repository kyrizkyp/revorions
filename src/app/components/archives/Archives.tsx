"use client";

import { IconChevronLeft } from "@tabler/icons-react";
import { useDictionary } from "../DictionaryProvider";
import Link from "next/link";
import React from "react";

const Archives = () => {
  const t = useDictionary();
  return (
    <div className="w-full px-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center md:justify-between">
        <div className="text-left">
          <h1 className="font-mono text-xs md:text-sm">{t.archives.page}</h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="p-2 text-center">
            <h1 className="font-mono font-bold">{t.archives.title1}</h1>
          </div>

          <div className="max-w-4xl text-center p-2">
            <p className="font-mono text-xs md:text-sm">{t.archives.desc1}</p>
          </div>
        </div>

        <div className="self-end lg:self-auto px-0 lg:px-2 pt-8 lg:pt-0">
          <p className="font-mono text-xs md:text-sm">&lsquo;RV24&lsquo;-25</p>
        </div>
      </div>
    </div>
  );
};

export default Archives;
