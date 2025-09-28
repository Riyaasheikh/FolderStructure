import React, { useState } from "react";

const AccordinCom = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer py-4"
      >
        <div className="font-medium text-white">{title}</div>
        <span
          className={`transform transition-transform duration-300 text-lg text-white`}
        >
          {isOpen ? "˅" : "›"}
        </span>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-4 text-gray-200">{content}</p>
      </div>
    </div>
  );
};

export default AccordinCom;
