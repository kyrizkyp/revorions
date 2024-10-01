"use client";

import React from "react";
import { useDictionary } from "../DictionaryProvider";

const AuthenticityProtection = () => {
  const t = useDictionary();
  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="flex flex-col md:flex-row items-start gap-6 xl:gap-32">
        <div className="text-left">
          <h1 className="font-mono font-bold">{t.authenticity.title2}</h1>
        </div>

        <div className="text-left">
          <div className="max-w-xl xl:max-w-4xl pb-2">
            <p className="font-mono text-sm">{t.authenticity.desc2}</p>
          </div>

          <div className="hidden md:block max-w-xl xl:max-w-4xl pt-2">
            <p className="text-left font-mono text-sm">
              {t.authenticity.desc3}
            </p>
          </div>
        </div>
      </div>

      <div className="block md:hidden max-w-xl xl:max-w-4xl pt-2">
        <p className="text-left font-mono text-sm">{t.authenticity.desc3}</p>
      </div>
    </div>
  );
};

export default AuthenticityProtection;
