"use client";

import React from "react";
import { useDictionary } from "../DictionaryProvider";

const HistoryHero = () => {
  const t = useDictionary();
  const background = [
    "https://fastly.picsum.photos/id/808/1920/1080.jpg?hmac=F5GHMKc6mj7fz0ZmTCySRPYFVY8gV2VaoFz16-ONrug",
  ];
  return (
    <div className="flex flex-col">
      <div
        className="flex items-center justify-center w-full min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="absolute w-full px-4 flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-between py-10 md:py-20">
            <div className="text-left text-white">
              <h1 className="font-mono text-xs md:text-sm">{t.history.page}</h1>
            </div>

            <div className="text-white max-w-[160px] md:max-w-md">
              <p className="font-mono text-xs">&lsquo;RV24&lsquo;-25</p>
            </div>
          </div>

          <div className="w-full flex items-center justify-center py-10 md:py-20">
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-10">
              <div className="text-left text-white">
                <h1 className="font-mono font-bold">{t.history.title1}</h1>
              </div>

              <div className="text-white max-w-xs md:max-w-md lg:max-w-xl xl:max-w-2xl">
                <p className="text-left font-mono text-xs md:text-sm">
                  {t.history.desc1}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryHero;
