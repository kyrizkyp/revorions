"use client";

import React, { useState, useEffect } from "react";
import IDcode from "../../DataID/IDcode.json";
import NotFoundID from "../../DataID/NotFoundID";

interface DetailItemProps {
  detaiID: string;
}

const CheckID: React.FC<DetailItemProps> = ({ detaiID }) => {
  const [loading, setLoading] = useState(true);
  const [foundID, setFoundID] = useState<{ id: string; url: string } | null>(
    null
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const result = IDcode.find((item) => item.url === detaiID);
      setFoundID(result || null);
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [detaiID]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {loading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : foundID ? (
        <div>
          <p>ID ditemukan: {foundID.id}</p>
          <p>URL: {foundID.url}</p>
        </div>
      ) : (
        <div>
          <p>{NotFoundID.title}</p>
          <p>URL acak: {NotFoundID.url}</p>
        </div>
      )}
    </div>
  );
};

export default CheckID;
