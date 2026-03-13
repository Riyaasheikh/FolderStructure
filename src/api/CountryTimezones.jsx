import React, { useState, useMemo } from "react";

const TimeZoneSelector = ({ onTimeZoneChange, onTimeFormatChange }) => {
  const [selectedZone, setSelectedZone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [format, setFormat] = useState("12h");

  // Get all official IANA time zones without an external API
  const timeZones = useMemo(() => {
    return Intl.supportedValuesOf("timeZone").map((zone) => {
      // Calculate GMT offset for each zone
      const now = new Date();
      const tzString = now.toLocaleString("en-US", { timeZone: zone, timeZoneName: "shortOffset" });
      const offset = tzString.split(" ").at(-1); // e.g., "GMT+5"
      return { zone, offset };
    });
  }, []);

  const handleZoneChange = (e) => {
    const zone = e.target.value;
    setSelectedZone(zone);
    if (onTimeZoneChange) onTimeZoneChange(zone);
  };

  const handleFormatChange = (newFormat) => {
    setFormat(newFormat);
    if (onTimeFormatChange) onTimeFormatChange(newFormat);
  };

  return (
    
      
      <div className="relative">
        
        <select
          value={selectedZone}
          onChange={handleZoneChange}
          className="w-full text-white cursor-pointer hover:border-gray-600 transition"
        >
          {timeZones.map(({ zone, offset }) => (
            <option key={zone} value={zone} className="bg-[#1a1a1a]">
              {zone.replace(/_/g, " ")} ({offset})
            </option>
          ))}
        </select>
      </div>
  );
};

export default TimeZoneSelector;