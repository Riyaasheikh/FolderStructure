import React from "react";
import HeroCard from "./HeroCard";
import ProfileCard from "../../../../components/global/ProfileCard";

const HeroSection = () => {
  return (
    <div
      className="w-full min-h-100vh pb-4"
      style={{
        background: "linear-gradient(180deg, #0c0c0cff ,#262626,#da4620)",
      }}
    >
      <div className="max-w-8xl mx-auto lg:px-8 lg:py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="w-full max-w-2xl">
              <HeroCard />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-4 sm:px-6 lg:px-0">
            <div className="w-full max-w-sm lg:max-w-md">
              <ProfileCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;