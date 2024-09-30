import React from "react";

const HistoryArt = () => {
  return (
    <div className="w-full px-4 md:px-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start lg:gap-20">
        <div className="flex items-start gap-4 md:gap-12 lg:gap-20 pb-2 lg:pb-0">
          <div className="text-left">
            <h1 className="font-mono font-bold">REVORIONS ART</h1>
            <h2 className="font-mono font-bold">•</h2>
          </div>

          <div className="max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl">
            <p className="font-mono text-xs md:text-sm text-left">
              Since 2024, REVORIONS has been active in various artistic
              collaborations, especially mural art which reflects the spirit of
              courage and creative expression. Through evocative visual works,
              both in public spaces and through fashion design.
            </p>
          </div>
        </div>

        <div className="max-w-md lg:max-w-xs xl:max-w-lg pt-2 lg:pt-0">
          <p className="font-mono text-xs md:text-sm text-center lg:text-left">
            We consider mural art as a form of creativity that reflects a deep
            message in every detail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryArt;
