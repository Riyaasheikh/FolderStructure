import React from "react";
import SectionHeading from "../global/SectionHeading";
import Buttons from "../global/Buttons";

const StrategyCall = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4">
      <div className="bg-[#1f1f1f] max-w-4xl w-full border border-[#262626] rounded-lg px-6 py-12 text-center">
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
          titleClassName="text-white mb-4"
          subtitleClassName="text-gray-300 mb-8"
        />

        <Buttons
          button1={"Book a Strategy Call"}
          className="bg-white text-black px-6 py-3"
        />
      </div>
    </div>
  );
};

export default StrategyCall;
