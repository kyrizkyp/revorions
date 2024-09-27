import React from "react";

const History = () => {
  return (
    <div className="w-full px-4 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-between py-20">
        <div className="text-left text-white">
          <h1 className="font-mono font-bold">REVORIONS</h1>
        </div>

        <div className="text-white max-w-[160px] md:max-w-md">
          <p className="font-mono font-bold text-sm">&lsquo;RV24&lsquo;-25</p>
        </div>
      </div>

      <div className="w-full flex items-center  justify-center py-20">
        <div className="flex items-start gap-32">
          <div className="text-left text-white">
            <h1 className="font-mono font-bold">HISTORY OF RV</h1>
            <p className="font-mono text-sm">•</p>
          </div>

          <div className="text-white max-w-[160px] md:max-w-md">
            <p className="text-left font-mono text-sm">
              Creating DNA in the world of fashion, combining dynamic and
              innovative designs to express each individual&lsquo;s unique
              identity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
