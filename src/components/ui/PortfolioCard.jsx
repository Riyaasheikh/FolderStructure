import React from "react";

const PortfolioCard = ({ image, title, description, btn }) => {
  return (
    <div className="bg-[#131313] text-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl h-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 mt-6  border border-gray-700">
      {/* Image */}
      <div className="flex justify-center mb-5">
        <div className="relative bg-[#332c2c] rounded-lg h-40 sm:h-56 lg:h-85 max-w-ms sm:max-w-sm lg:max-w-full flex items-center justify-center mb-5">
          <img
            src={image}
            alt={title}
            className="w-full h-full max-w-2xl max-h-40 sm:max-h-56 lg:max-h-85 object-contain rounded-lg transform hover:scale-90 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Content */}
      <div className="text-lg sm:text-2xl ml-5 lg:text-3xl font-bold text-white mb-3 lg:mb-6 sm:mb-4 text-center sm:text-left">
        {title}
      </div>
      <div className="text-gray-300 mb-4 ml-5 sm:mb-5 text-sm sm:text-base lg:text-lg leading-relaxed text-center sm:text-left">
        {description}
      </div>
      <div className="ml-5 text-center sm:text-left pb-2">
        <button className="group text-[#848484] hover:text-white transition-colors duration-200 font-medium text-sm sm:text-base">
          {btn}
          <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-200">→</span>
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;