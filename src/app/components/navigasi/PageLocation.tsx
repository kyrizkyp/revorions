import React from "react";

interface PageLocationProps {
  judul: string;
  place: string;
  classText: string;
}

const PageLocation: React.FC<PageLocationProps> = ({
  judul,
  place,
  classText,
}) => {
  return (
    <div className="w-full">
      <div className="flex items-start justify-between p-4">
        <div className={classText}>
          <p className="font-mono font-bold">{judul}</p>
        </div>

        <div className={classText}>
          <p className="font-mono font-bold">&lsquo;{place}&lsquo;</p>
        </div>
      </div>
    </div>
  );
};

export default PageLocation;
