import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <div className="mr-10">

    
      <p className="text-gray-300 ml-0">Call Session</p>
    <h1 className="text-white text-3xl">
      {time.toLocaleTimeString()}
    </h1>
  </div>
  );
};

export default Clock;
