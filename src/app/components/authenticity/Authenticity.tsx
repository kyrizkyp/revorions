"use client";

import React from "react";
import { useDictionary } from "../DictionaryProvider";

const Authenticity = () => {
  const t = useDictionary();
  return (
    <div className="w-full px-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center md:justify-between">
        <div className="text-left self-start pb-8 lg:pb-0">
          <h1 className="font-mono text-xs md:text-sm">
            {t.authenticity.page}
          </h1>
        </div>

        <div className="max-w-xl xl:max-w-2xl">
          <p className="text-center font-mono text-sm">
            {t.authenticity.desc1}
          </p>
        </div>

        <div className="self-end lg:self-auto px-0 lg:px-2 pt-8 lg:pt-0">
          <p className="font-mono text-xs md:text-sm">&lsquo;RV04&lsquo;-04</p>
        </div>
      </div>
    </div>
  );
};

export default Authenticity;
