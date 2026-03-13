import React, { useState } from "react";
import { format, isSameDay } from "date-fns";

const TimeSlots = ({ selectedDate, onTimeSelect }) => {
  const [formatType, setFormatType] = useState("12h");

  const times = [
    "08:00", "08:15", "08:30", "08:45",
    "09:00", "09:15", "09:30", "09:45",
    "10:00", "10:15", "10:30", "10:45",
    "11:00", "11:15", "11:30", "11:45",
    "12:00", "12:15", "12:30", "12:45",
    "13:00", "13:15", "13:30", "13:45",
    "14:00", 
  ];

  // Convert time to 12h / 24h
  const convertTime = (time) => {
    if (formatType === "24h") return time;

    let [h, m] = time.split(":");
    h = parseInt(h, 10);

    const suffix = h >= 12 ? "pm" : "am";
    h = h % 12 || 12;

    return `${h}:${m} ${suffix}`;
  };

  // Filter times based on selected date
  const getAvailableTimes = () => {
    if (!selectedDate) return times;

    const now = new Date();

    // If selected date is today → remove past times
    if (isSameDay(selectedDate, now)) {
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      return times.filter((time) => {
        const [h, m] = time.split(":").map(Number);
        const slotMinutes = h * 60 + m;
        return slotMinutes > currentMinutes;
      });
    }

    // Future date → show all times
    return times;
  };

  const availableTimes = getAvailableTimes();

  return (
    <div className="w-full lg:w-1/4 bg-[#171717] text-white p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">
          {selectedDate ? format(selectedDate, "EEE d") : "Select a date"}
        </h2>

        <div className="flex bg-[#1A1A1A] rounded-md overflow-hidden">
          <button
            className={`px-2 py-1 text-sm ${
              formatType === "12h"
                ? "bg-white text-black"
                : "text-gray-400"
            }`}
            onClick={() => setFormatType("12h")}
          >
            12h
          </button>

          <button
            className={`px-2 py-1 text-sm ${
              formatType === "24h"
                ? "bg-white text-black"
                : "text-gray-400"
            }`}
            onClick={() => setFormatType("24h")}
          >
            24h
          </button>
        </div>
      </div>

      <div className="space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-[#0F0F0F] max-h-[70vh]">
        {availableTimes.length > 0 ? (
          availableTimes.map((time, i) => (
            <button
              key={i}
              onClick={() => onTimeSelect(convertTime(time))}
              className="w-full text-left bg-[#1A1A1A] hover:bg-[#2A2A2A] px-4 py-2 rounded transition"
            >
              {convertTime(time)}
            </button>
          ))
        ) : (
          <p className="text-gray-400 text-sm text-center">
            No available slots
          </p>
        )}
      </div>
    </div>
  );
};

export default TimeSlots;
