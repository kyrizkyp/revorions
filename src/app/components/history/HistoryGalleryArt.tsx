import React from "react";

const HistoryGalleryArt = () => {
  const images = [
    "https://fastly.picsum.photos/id/456/300/300.jpg?hmac=CgDpdsWrPu1M-lSVyBmb4tB8w-alAOPACgjC4er8Bug",

    "https://fastly.picsum.photos/id/81/300/300.jpg?hmac=XzAHsazxv_qJcyTYqnd6eNnvg_PrTz7PRSpNEU4VdAg",

    "https://fastly.picsum.photos/id/887/300/300.jpg?hmac=mKH_FA1tJYO-cqzDh30PNOvsWf3o6ID7zr-5_cwXhjM",

    "https://fastly.picsum.photos/id/852/300/300.jpg?hmac=C74OvReXr8eTOLi2bE_cdtGaZuHvJvt_755uon3BdAc",
  ];
  return (
    <div className="w-full px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xl:gap-10">
          {images.map((image, index) => (
            <div className="p-[2px]" key={index}>
              <img
                key={index}
                src={image}
                alt={`Brand ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryGalleryArt;
