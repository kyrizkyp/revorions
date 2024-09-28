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
      <div className="flex items-start justify-between py-2 px-4">
        <div className={classText}>
          <p className="text-left font-mono text-xs md:text-sm">
            &copy;&lsquo;2024&lsquo;-{currentYear}
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
