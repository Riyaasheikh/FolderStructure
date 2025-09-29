import React from "react";

const PortfolioCard = ({ image, image2, title, description, btn }) => {
  return (
    <div className="bg-[#131313] text-white rounded-3xl shadow-2xl overflow-hidden  max-w-5xl px-13 p-5 mt-10 mb-2">
      <div className="relative bg-[#332c2c] rounded-lg p-5 mb-2 mt-3 h-80 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="absolute h-64 w-44 rounded-lg object-cover z-10 left-4"
        />
        <img
          src={image2}
          alt={title}
          className="absolute h-60 w-40 rounded-lg object-cover z-20 left-52 opacity-90"
        />
      </div>
      <div className="text-2xl font-bold text-white mb-3">{title}</div>
      <div className="text-gray-300 mb-4">{description}</div>
      <div className="mb-5 ml-3">{btn}</div>
    </div>
  );
};

export default PortfolioCard;
