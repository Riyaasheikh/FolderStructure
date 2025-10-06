import React from "react";
import SectionHeading from "../../../../components/global/SectionHeading";
import Buttons from "../../../../components/global/Buttons";

const HeroCard = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="mb-6 lg:mb-8">
        <Buttons 
          button1={"🏵 Available for Work"} 
          className={"!bg-[#222222] text-white text-sm sm:text-base"} 
        />
      </div>

      <SectionHeading
        title={
          <>
            <div className="text-left w-full text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl ">
              Design Your Future
            </div>
            <div className="text-left w-full text-3xl text-gray-300 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl ">
              with Purpose &
            </div>
            <div className="text-left w-full text-[#878787] text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl ">
              Precision
            </div>
          </>
        }
        subtitle={
          <>
            <div className="text-left w-full text-sm text-gray-300 p-1  lg:mt-6">
              Unlock your creative potential with tailored design solutions that focus on clarity,
            </div>
            <div className="text-left w-full text-sm p-1 text-gray-300">
             impact, and efficiency. Whether it’s a brand identity or a seamless user experience, 
            </div>
            <div className="text-left w-full text-sm p-1 text-gray-300">
            I help turn ideas into meaningful designs.
            </div>
          </>
        }
        titleClassName={
          "text-white font-medium flex flex-col items-start antialiased"
        }
        subtitleClassName={"text-white text-gray-300 items-start"}
      />
    </div>
  );
};

export default HeroCard;