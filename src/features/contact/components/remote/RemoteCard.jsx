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
    <div className="bg-[#1a1a1a] mt-13 rounded-3xl shadow-lg lg:max-w-7xl py-5   p-3">
    
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2 mb-3">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-103"
          >
            <img
              src={img}
              alt={`Remote work ${index + 1}`}
              className="w-full h-64 object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>


      <div className="flex justify-center items-center align-center   gap-4">
        <Clock />
        <div className="bg-[#2B2B2B] h-20 w-90 rounded-full flex justify-between align-center items-center">
          <Buttons
            button1="Book a Call"
            className="text-sm sm:text-base bg-[#3D3D3D] hover:bg-[#323334] ml-2 px-5 py-5 rounded-full transition"
          />
          <img
            className="invert h-6 w-6 bg-[#323334] ml-2 mr-2 px-5 py-5 rounded-full"
            src="https://framerusercontent.com/images/D8owpIUWGFmyJvo63BqFYoTMqg.png"
            alt="Logo"
          />
          <Buttons
            button1="Email Me"
            className="text-sm sm:text-base bg-[#3D3D3D] hover:bg-[#323334] mr-2 px-5 py-5 rounded-full transition"
          />
        </div>
      </div>
    </div>
  );
};

export default RemoteCard;
