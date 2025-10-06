import React from "react";
import SectionHeading from "../global/SectionHeading";
import Buttons from "../global/Buttons";

const StrategyCall = () => {
  return (
    <div className="flex justify-center items-center min-w-full min-h-50vh lg:mb-5 lg:mt-5 bg-black px-2 sm:px-4 lg:px-0">
      <div className="bg-[#1f1f1f] max-w-6xl w-full border border-[#262626] rounded-lg py-6 md:py-10 lg:py-15 text-center">
        <SectionHeading
          title={
            <>
              <div>Ready to Elevate Your</div>
              <div>Product Experience?</div>
            </>
          }
          subtitle={
            <>
              <div>Take the first step toward clean, conversion-driven</div>
              <div>design that delights users and drives growth</div>
            </>
          }
          titleClassName="text-white mb-6 md:mb-8 px-4 sm:px-6 font-semibold text-2xl sm:text-3xl lg:text-5xl"
          subtitleClassName="text-gray-300 mb-6 md:mb-8 text-sm sm:text-base lg:text-lg/8 px-4"
        />

        <Buttons
          button1={"Book a Strategy Call"}
          className="bg-[#D63E18] text-white px-6 py-3 sm:px-7 sm:py-3.5 lg:px-8 lg:py-4 text-sm sm:text-base"
        />
      </div>
    </div>
  );
};

export default StrategyCall;