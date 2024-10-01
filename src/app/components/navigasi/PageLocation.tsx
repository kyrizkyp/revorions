"use client";

import React from "react";
import { useDictionary } from "../DictionaryProvider";

interface PageLocationProps {
  place: string;
  classText: string;
  bgColor: string;
}

const PageLocation: React.FC<PageLocationProps> = ({
  place,
  classText,
  bgColor,
}) => {
  const currentYear = new Date().getFullYear();

  const t = useDictionary();
  return (
    <div className={`w-full ${bgColor}`}>
      <div className="flex items-start justify-between p-4">
        <div className={classText}>
          <p className="text-left font-mono text-xs md:text-sm">
            &copy;{t.pageLocation.year}-{currentYear}
          </p>
        </div>

        <div className={classText}>
          <p className="text-right font-mono text-xs md:text-sm">
            &lsquo;{place}&lsquo;
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageLocation;
