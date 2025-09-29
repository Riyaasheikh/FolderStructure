import React from "react";
import heroImg from "../../assets/asset/p1.jpeg";
import heroImg2 from "../../assets/asset/p4.jpeg";
import heroImg3 from "../../assets/asset/p3.jpeg";
import Buttons from "./Buttons";
import DesignCard from "./DesignCard";

const ProfileCard = () => {
  return (
    <div className="bg-[#131313] text-white rounded-3xl shadow-2xl overflow-hidden max-w-sm mx-auto">
      <div className="p-8">
        <div className="flex items-center justify-between ">
          <DesignCard />

          <Buttons
            button1={"See Work"}
            className={"px-3 py-2 d bg-transparent"}
          />
        </div>

        <div className="relative bg-[#332c2c] rounded-lg   mt-3 min-h-72 min-w-100 flex items-center justify-center">
          <img
            className="absolute h-64 w-44 rounded-lg object-cover z-10 left-4"
            src={heroImg2}
            alt="Excellence"
          />

          <img
            className="absolute h-60 w-40 rounded-lg object-cover z-20 left-52 opacity-90"
            src={heroImg3}
            alt="Excellence 2"
          />
        </div>
      </div>

      <div className="py-3 px-9">
        <div className="flex justify-between">
          <Buttons button1={"Book A Call"} className="text-sm bg-transparent" />
          <Buttons button1={"Email Me"} className=" text-sm bg-transparent" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
