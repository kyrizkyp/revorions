import React from "react";

const HistoryNote = () => {
  return (
    <div className="w-full px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-12 lg:gap-20">
        <div className="text-left">
          <h1 className="font-mono font-bold">REVORIONS INDEPENDENT</h1>
          <h2 className="font-mono font-bold">•</h2>
        </div>

        <div className="max-w-sm md:max-w-xl xl:max-w-2xl">
          <p className="font-mono text-xs md:text-sm text-left">
            REVORIONS was born from a strong spirit of independence. Founded as
            a brand that promotes freedom of expression, REVORIONS is not bound
            by temporary trends. Each collection produced carries a bold
            character, depicting independence and uniqueness. We are committed
            to continuing to create work without limitations, with a focus on
            quality and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryNote;
