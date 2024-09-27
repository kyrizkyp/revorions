"use client";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";

const TimeZone = () => {
  const [time, setTime] = useState("");
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };

      const dayNames = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
      ];

      const monthNames = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ];

      const now = new Date();

      const dayName = dayNames[now.getDay()];

      const monthName = monthNames[now.getMonth()];

      let timeString = now.toLocaleTimeString("id-ID", options);

      timeString = timeString.replace(/\./g, ":");

      const [timePart, amPm] = timeString.split(" ");

      const dateString = `${dayName}, ${now.getDate()} ${monthName} ${now.getFullYear()}`;

      setFormattedDate(`ID 'UTC+7' - ${dateString}`);
      setTime(`'${timePart}'${amPm}`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full bg-black flex items-center justify-center p-2 gap-[6px] md:gap-10">
      <div className="text-white">
        <IconChevronLeft className="w-4 h-4" />
      </div>

      <div className="text-white flex gap-2">
        <div className="text-center text-xs md:text-sm">
          <p className="font-mono">{formattedDate}</p>
        </div>

        <div className="text-center text-xs md:text-sm">
          <p className="font-mono">{time}</p>
        </div>
      </div>

      <div className="text-white">
        <IconChevronRight className="w-4 h-4" />
      </div>
    </div>
  );
};

export default TimeZone;
