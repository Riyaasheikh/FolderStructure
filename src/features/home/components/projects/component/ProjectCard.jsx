import React from "react";

const ProjectCard = ({ title, description, btn, image }) => {
  return (
    <div className="bg-[#131313] text-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl  px-4 sm:px-6 lg:px-10 py-6 sm:py-8  mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        <div className="flex-1 w-full lg:max-w-xl text-center lg:text-left">
          <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            {title}
          </div>
           <div className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
            {description}
             </div>
                <div className="mb-4 sm:mb-5">{btn}</div>
            </div>
                 <div className="flex-1 w-full lg:max-w-lg flex justify-center">
                    <div className="relative bg-[#332c2c] rounded-lg h-40 sm:h-56 lg:h-6 w-full max-w-[240px] sm:max-w-sm lg:max-w-full flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="w-full h-full max-h-40 sm:max-h-56 lg:max-h-72 object-contain rounded-lg transform hover:scale-90 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
