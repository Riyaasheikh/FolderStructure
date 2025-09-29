import React from "react";
import SectionHeading from "../global/SectionHeading";
import logo1 from "../../assets/icons/profile_icon.png";
import logo2 from "../../assets/icons/quality_icon.png";

const TrustedBy = () => {
  return (
    <div className="bg-black px-4 py-8 ">
      <SectionHeading
        subtitle={"Trusted by Over 1,000 Clients Worldwide"}
        subtitleClassName={"text-gray-400 mb-8 font-normal text-center text-lg"}
      />
      <div className="flex justify-around">
        <div className="flex text-gray-200 items-center space-x-3">
          <img className="h-14 w-12 " src={logo1} alt="" />
          <p className="text-gray-400 font-normal">Lopisum</p>
        </div>
        <div className="flex text-gray-200 items-center space-x-3">
          <img className="h-14 w-12 " src={logo2} alt="" />
          <p className="text-gray-400 font-normal">Lopisum</p>
        </div>
        <div className="flex text-gray-200 items-center space-x-3">
          <img className="h-14 w-12 " src={logo2} alt="" />
          <p className="text-gray-400 font-normal">Lopisum</p>
        </div>
        <div className="flex text-gray-200 items-center space-x-3">
          <img className="h-14 w-12 " src={logo1} alt="" />
          <p className="text-gray-400 font-normal">Lopisum</p>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
