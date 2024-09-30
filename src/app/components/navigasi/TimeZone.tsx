"use client";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";
import { useDictionary } from "../DictionaryProvider";

const TimeZone = () => {
  const [time, setTime] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const t = useDictionary();

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };

      const dayNames = t.timeZone.day.split(", ");

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

      const hour = now.getHours();
      const amPm = hour >= 12 ? "PM" : "AM";

      const dateString = `${dayName}, ${now.getDate()} ${monthName} ${now.getFullYear()}`;
      setFormattedDate(`ID 'UTC+7' ${dateString}`);
      setTime(`'${timeString}'${amPm}`);
    };

    updateTime();
    const timeIntervalId = setInterval(updateTime, 1000);
    const messageIntervalId = setInterval(() => {
      setShowMessage((prev) => !prev);
    }, 20000);

    return () => {
      clearInterval(timeIntervalId);
      clearInterval(messageIntervalId);
    };
  }, []);

  const handleNextClick = () => {
    setShowMessage(true);
  };

  const handlePrevClick = () => {
    setShowMessage(false);
  };

  return (
    <div className="w-full bg-black">
      <div className="max-w-sm md:max-w-xl mx-auto flex items-center justify-between p-2">
        <button className="text-white" onClick={handlePrevClick}>
          <IconChevronLeft className="w-4 h-4" />
        </button>

        <div className="relative w-full mx-auto flex items-center justify-center">
          <div
            className={`relative text-center text-xs md:text-sm transition-opacity duration-1000 ease-in-out ${
              showMessage ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="font-mono text-white">{t.timeZone.say}</p>
          </div>

          <div
            className={`absolute transition-opacity duration-1000 ease-in-out ${
              showMessage ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="text-white flex gap-[4px] md:gap-[6px]">
              <div className="text-center text-xs md:text-sm">
                <p className="font-mono">{formattedDate}</p>
              </div>

              <div className="text-center text-xs md:text-sm">
                <p className="font-mono">{time}</p>
              </div>
            </div>
          </div>
        </div>

        <button className="text-white" onClick={handleNextClick}>
          <IconChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TimeZone;
