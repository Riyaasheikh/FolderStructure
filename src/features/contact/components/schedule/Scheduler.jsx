import React, { useState } from "react";
import MeetingSidebar from "./MeetingSidebar";
import Calendar from "./Calendar";
import TimeSlots from "./TimeSlots";
import ConfirmationForm from "./confirmation/ConfirmationForm";
import ConfirmationSuccess from "./confirmation/ConfirmationPage";

const Scheduler = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);

  if (confirmed) return <ConfirmationSuccess />;
  if (selectedDate && selectedTime)
    return <
      ConfirmationForm 
      date={selectedDate.toDateString()}
       time={selectedTime} 
       timezone={timezone}
       onConfirm={() => setConfirmed(true)} />;

  return (
    <div className="flex flex-col lg:flex-row bg-black min-h-100vh min-w-[200px] ">
<MeetingSidebar onTimezoneChange={setTimezone} currentTimezone={timezone} />
      <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
      <TimeSlots selectedDate={selectedDate} onTimeSelect={setSelectedTime} />
    </div>
  );
};

export default Scheduler;
