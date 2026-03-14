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
      
      {/* Responsive Grid: 1 column on mobile, 2 on laptop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={img}
              alt={`Remote work showcase ${index + 1}`}
              className="w-full h-48 sm:h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Bottom Section: Clock and Action Bar */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        
        {/* Clock Wrapper */}
        <div className="flex-shrink-0">
          <Clock />
        </div>

        {/* Action Bar (The Pill) */}
        <div className="bg-[#2B2B2B] w-full max-w-[450px] lg:w-auto p-2 lg:p-0 lg:h-20 rounded-[2rem] lg:rounded-full flex flex-row items-center justify-between border border-[#3d3d3d]">
          
          <Buttons
            button1="Book a Call"
            className="flex-1 lg:flex-none whitespace-nowrap text-xs sm:text-sm font-medium bg-[#3D3D3D] hover:bg-[#4d4d4d] text-white ml-1 lg:ml-2 px-4 sm:px-8 py-4 lg:py-5 rounded-full transition-all active:scale-95"
          />

          {/* Icon - Visible mainly on larger mobile and desktop */}
          <div className="flex items-center justify-center bg-[#323334] mx-2 h-10 w-10 sm:h-12 sm:w-12 rounded-full flex-shrink-0">
            <img
              className="invert h-5 w-5 opacity-80"
              src="https://framerusercontent.com/images/D8owpIUWGFmyJvo63BqFYoTMqg.png"
              alt="Brand Logo"
            />
          </div>

          <Buttons
            button1="Email Me"
            className="flex-1 lg:flex-none whitespace-nowrap text-xs sm:text-sm font-medium bg-[#3D3D3D] hover:bg-[#4d4d4d] text-white mr-1 lg:mr-2 px-4 sm:px-8 py-4 lg:py-5 rounded-full transition-all active:scale-95"
          />
          
        </div>
      </div>
    </div>
  );
};

export default RemoteCard;