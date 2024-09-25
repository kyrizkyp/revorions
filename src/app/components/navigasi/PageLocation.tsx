import React from "react";

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
  return (
    <div className={`w-full ${bgColor}`}>
      <div className="flex items-start justify-between p-4">
        <div className={classText}>
          <p className="font-mono font-bold">
            &copy;&lsquo;2024&lsquo;-{currentYear}
          </p>
        </div>

        <div className={classText}>
          <p className="font-mono font-bold">&lsquo;{place}&lsquo;</p>
        </div>
      </div>
    </div>
  );
};

export default PageLocation;
