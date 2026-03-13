import React from "react";
import HeroCard from "./HeroCard";
import ProfileCard from "../../../../components/global/ProfileCard";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0c0c0c, #262626, #AC391C)",
      }}
    >

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-[60%] flex flex-col items-start text-left">
            <HeroCard />
          </div>
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
            <div className="w-full max-w-[420px]"> 
              <ProfileCard />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;