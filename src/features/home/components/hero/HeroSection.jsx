import React from "react";
import HeroCard from "./HeroCard";
import ProfileCard from "../../../../components/global/ProfileCard";
const HeroSection = () => {
  return (
    <div
      className="mx-auto max-w-8xl  lg:px-2  lg:py-2  "
      style={{
        background: "linear-gradient(180deg, #0c0c0cff ,#262626,#da4620)",
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2">
          <HeroCard />
        </div>

        <ProfileCard />
      </div>
    </div>
  );
};

export default HeroSection;
