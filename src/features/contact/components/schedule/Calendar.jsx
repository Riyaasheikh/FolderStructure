import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
  getDay,
  addDays,
  isSameMonth,
} from "date-fns";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Calendar = ({ selectedDate, onSelectDate, timezone = "Asia/Karachi" }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Check if we are currently looking at the real-time current month
  const isViewingCurrentMonth = isSameMonth(currentMonth, new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const startDayIndex = getDay(monthStart);

  // CHANGE: Only calculate overflow days for the current month. 
  // For future months, only show the dates within that month.
  const daysToRender = eachDayOfInterval({
    start: monthStart,
    end: isViewingCurrentMonth 
      ? addDays(monthStart, 41 - startDayIndex) // 42-day grid for current month
      : monthEnd, // Just the month days for future months
  });

  const getZonedTodayString = () => {
    const options = { timeZone: timezone, year: 'numeric', month: '2-digit', day: '2-digit' };
    const parts = new Intl.DateTimeFormat('en-CA', options).formatToParts(new Date());
    const year = parts.find(p => p.type === 'year').value;
    const month = parts.find(p => p.type === 'month').value;
    const day = parts.find(p => p.type === 'day').value;
    return `${year}-${month}-${day}`;
  };

  const todayString = getZonedTodayString();

  return (
    <div className="w-full lg:w-1/2 p-6 text-white bg-[#171717] border-r border-gray-800">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-200">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <div className="flex space-x-2">
          {/* CHANGE: Added 'disabled' attribute and opacity styling if viewing current month */}
          <button 
            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} 
            disabled={isViewingCurrentMonth}
            className={`p-2 rounded-full transition ${isViewingCurrentMonth ? "opacity-20 cursor-not-allowed" : "hover:bg-gray-800"}`}
          >
            <FaAngleLeft size={14} />
          </button>
          <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="p-2 hover:bg-gray-800 rounded-full transition">
            <FaAngleRight size={14} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
          <div key={d} className="text-[#9e9e9e] text-[10px] font-bold tracking-widest mb-4">
            {d}
          </div>
        ))}

        {Array.from({ length: startDayIndex }).map((_, i) => (
          <div key={`empty-${i}`} className="h-16" />
        ))}

        {daysToRender.map((day) => {
          const dateString = format(day, "yyyy-MM-dd");
          const isCurrentMonth = isSameMonth(day, currentMonth);
          const isSelected = dateString === format(selectedDate, "yyyy-MM-dd");
          const isToday = dateString === todayString;
          const isPast = dateString < todayString;
          const isFirstOfNextMonth = !isCurrentMonth && format(day, "d") === "1";

          return (
            <div
              key={dateString}
              onClick={() => !isPast && onSelectDate(day)}
              className={`relative flex flex-col items-center justify-center transition rounded-lg h-16 cursor-pointer ${
                isSelected
                  ? "bg-[#FAFAFA] text-black shadow-md"
                  : !isCurrentMonth
                  ? "bg-[#262626] text-gray-500 hover:bg-[#333333]" 
                  : isPast
                  ? "text-gray-600 cursor-not-allowed"
                  : isToday
                  ? "bg-[#262626] border border-gray-600 text-white"
                  : "bg-[#404040] border border-transparent text-white hover:bg-[#525252]"
              }`}
            >
              {isFirstOfNextMonth && (
                <span className="absolute top-1 left-2 text-[9px] font-bold text-gray-500 uppercase">
                  {format(day, "MMM")}
                </span>
              )}

              <span className="text-sm font-medium">{format(day, "d")}</span>

              {isToday && (
                <span className={`absolute bottom-3 w-1 h-1 rounded-full ${isSelected ? "bg-black" : "bg-white"}`}></span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;