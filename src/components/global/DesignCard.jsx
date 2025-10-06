import React from "react";
import heroImg from "../../assets/asset/p5.avif";
const DesignCard = () => {
  return (
    <div>
      <div className="flex items-center space-x-3">
        <img
          className="w-18 h-18  rounded-lg object-cover"
          src={heroImg}
          alt="Jasmin Paul"
        />
        <div>
          <h2 className="text-normal font-normal text-white">Jasmin Paul</h2>
          <div className="flex items-center space-x-1 ">
            <span className="text-sm font-light text-[#f4f4f5]">Designer</span>
            <span className="text-gray-300">•</span>
            <span className="text-sm font-light text-white">Poland</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DesignCard;