"use client";

import React, { useState, useEffect } from "react";
import IDcode from "../../DataID/IDcode.json";
import { IconLoader } from "@tabler/icons-react";
import Original from "../orifake/Original";
import Fake from "../orifake/Fake";

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
    }, 6000);

    return () => clearTimeout(timer);
  }, [detaiID]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {loading ? (
        <div className="animate-spin">
          <IconLoader className="w-8 h-8" />
        </div>
      ) : foundID ? (
        <Original />
      ) : (
        <Fake />
      )}
    </div>
  );
};

export default CheckID;
