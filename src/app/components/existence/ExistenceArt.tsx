"use client";
import React from "react";
import { useDictionary } from "../DictionaryProvider";

const ExistenceArt = () => {
  const t = useDictionary();
  return (
    <div className="w-full px-4 md:px-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start lg:gap-20">
        <div className="flex items-start gap-4 md:gap-12 lg:gap-20 pb-2 lg:pb-0">
          <div className="text-left">
            <h1 className="font-mono font-bold">{t.existence.title3}</h1>
            <h2 className="font-mono font-bold">•</h2>
          </div>

          <div className="max-w-sm md:max-w-md lg:max-w-xl">
            <p className="font-mono text-xs md:text-sm text-left">
              {t.existence.desc3}
            </p>
          </div>
        </div>

        <div className="max-w-md lg:max-w-xs xl:max-w-md pt-2 lg:pt-0">
          <p className="font-mono text-xs md:text-sm text-center lg:text-left">
            {t.existence.desc4}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExistenceArt;
