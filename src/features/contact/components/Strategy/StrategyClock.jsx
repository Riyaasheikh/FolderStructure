import React from "react";
import Scheduler from "../schedule/Scheduler";

const StrategyClock = () => {
  return (
    <div className="bg-[#0C0C0C] text-white min-h-screen flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center max-w-5xl w-full py-10">
        <h1 className="text-4xl lg:text-5xl font-semibold mb-4">
          Book a Free 15-Minute Strategy Call
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-10">
          Pick a time that works for you and let’s dive straight into your project goals, target users, 
          and the design challenges you want to solve. In just a quarter hour, you’ll walk away with 
          clarity and next steps.
        </p>

        <Scheduler />
      </div>
    </div>
  );
};

export default StrategyClock;
