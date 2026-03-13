import React from "react";
import img10 from "../../../../assets/asset/p10.png";
import { FaRegClock } from "react-icons/fa6";
import CountryTimezones from "../../../../api/CountryTimezones";
import TimeZoneSelector from "../../../../api/CountryTimezones";

const MeetingSidebar = ({ onTimezoneChange, currentTimezone }) => {
  return (
    <div className="w-full lg:w-1/4 bg-[#171717] text-white p-6 border-r border-gray-800 flex flex-col">
      {/* Profile Section */}
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 mr-3 rounded-full overflow-hidden bg-pink-600 flex items-center justify-center">
          <img src={img10} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Subarno Paul</h2>
        </div>
      </div>

      {/* Meeting Info */}
      <h1 className="text-xl font-semibold mb-3">15 Min Meeting</h1>
      <p className="text-gray-400 text-sm flex items-center mb-1">
        <FaRegClock className="mr-2" /> 15m
      </p>
      <p className="text-gray-400 text-sm flex items-center mb-3">
        <FaRegClock className="mr-2" /> Google Meet
      </p>

      {/* Country Timezone Dropdown */}
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-gray-400">🌐</span>
        <TimeZoneSelector 
          onTimeZoneChange={onTimezoneChange} 
          selectedZone={currentTimezone} 
        />
      </div>
    </div>
  );
};

export default MeetingSidebar;
