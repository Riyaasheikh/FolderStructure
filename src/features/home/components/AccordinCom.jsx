import React from "react";

const AccordinCom = ({ title, content, isOpen, onToggle,className='' }) => {
  return (
    <div className={`border border-[#29292a] rounded-lg bg-[#1f1f1f] overflow-hidden ${className}`}>
      <div
        onClick={onToggle}
        className="flex justify-between items-center cursor-pointer p-6 hover:bg-[#262626] transition-colors"
      >
        <h3 className="text-lg font-semibold text-white pr-4">{title}</h3>
        <span className={`transform transition-transform duration-300 text-xl text-white flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          ⌄
        </span>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 pt-0">
          <div className="text-gray-300 leading-relaxed">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordinCom;