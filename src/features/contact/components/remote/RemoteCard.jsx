import React from "react";
import img1 from "../../../../assets/asset/p5.avif";
import img2 from "../../../../assets/asset/p2.jpeg";
import img3 from "../../../../assets/asset/p4.jpeg";
import img4 from "../../../../assets/asset/p3.jpeg";
import Buttons from "../../../../components/global/Buttons";
import Clock from "../../components/clock/Clock";

const RemoteCard = () => {
  const images = [img1, img2, img3, img4];

  return (
    <div className="bg-[#1a1a1a] mt-13 rounded-3xl shadow-lg lg:max-w-7xl py-6 p-4">
      
      {/* 1. Project Grid: Responsive columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-[1.02] border border-white/5"
          >
            <img
              src={img}
              alt={`Project frame ${index + 1}`}
              className="w-full h-48 sm:h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* 2. Bottom Interaction Bar */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        
        {/* Clock Component */}
        <div className="flex-shrink-0 scale-90 sm:scale-100">
          <Clock />
        </div>

        {/* The Action Pill: Designed to never overflow */}
        <div className="bg-[#2B2B2B] w-full max-w-[420px] lg:w-auto h-auto lg:h-20 p-1.5 lg:p-0 lg:px-2 rounded-full flex items-center justify-between border border-white/10 shadow-2xl">
          
          {/* Button 1: Dynamic text and padding */}
          <Buttons
            button1="Book a Call"
            className="flex-1 lg:flex-none whitespace-nowrap text-[10px] sm:text-xs md:text-sm font-bold bg-[#3D3D3D] hover:bg-[#4d4d4d] text-white px-2 sm:px-6 py-4 lg:py-5 rounded-full transition-all active:scale-95"
          />

          {/* Centered Decorative Icon */}
          <div className="flex items-center justify-center bg-[#323334] mx-1.5 sm:mx-3 h-10 w-10 sm:h-12 sm:w-12 rounded-full flex-shrink-0 border border-white/5 shadow-inner">
            <img
              className="invert h-4 w-4 sm:h-5 sm:w-5 opacity-80"
              src="https://framerusercontent.com/images/D8owpIUWGFmyJvo63BqFYoTMqg.png"
              alt="Center Icon"
            />
          </div>

          {/* Button 2: Dynamic text and padding */}
          <Buttons
            button1="Email Me"
            className="flex-1 lg:flex-none whitespace-nowrap text-[10px] sm:text-xs md:text-sm font-bold bg-[#3D3D3D] hover:bg-[#4d4d4d] text-white px-2 sm:px-6 py-4 lg:py-5 rounded-full transition-all active:scale-95"
          />
          
        </div>
      </div>
    </div>
  );
};

export default RemoteCard;