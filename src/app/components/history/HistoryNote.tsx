"use client";

import React from "react";
import { useDictionary } from "../DictionaryProvider";

const HistoryNote = () => {
  const t = useDictionary();
  return (
    <div className="w-full px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-12 lg:gap-20">
        <div className="text-left">
          <h1 className="font-mono font-bold">{t.history.title2}</h1>
          <h2 className="font-mono font-bold">•</h2>
        </div>

        <div className="max-w-sm md:max-w-xl xl:max-w-2xl">
          <p className="font-mono text-xs md:text-sm text-left">
            {t.history.desc2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryNote;
