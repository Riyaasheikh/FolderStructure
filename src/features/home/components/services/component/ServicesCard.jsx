import React from "react";

const ServicesCard = ({
  className = "",
  servicesTitle = "",
  servicesDescription = "",
  serviceData = "",
  classNameTitle,
  classNameDescripion,
  classNameService,
}) => {
  return (
    <div className={`bg-[#141414] ${className}`}>
      <section className="">
        <div className="lg:hidden w-16 h-16 mt-6  ml-2">
          <div className="bg-[#262626] rounded-lg flex  lg:pt-4 flex justify-center items-center lg:mt-5 pl-3 ">
            <img
              className="invert h-7 w-7"
              src="https://framerusercontent.com/images/D8owpIUWGFmyJvo63BqFYoTMqg.png"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start gap-3 border border-[#29292a] rounded-lg p-3 bg-[#1a1a1a]">
          <div className="hidden lg:flex bg-[#262626] rounded-lg p-2 h-25 w-25 flex justify-center items-center flex-shrink-0">
            <img
              className="invert h-10 w-10 text-center"
              src="https://framerusercontent.com/images/D8owpIUWGFmyJvo63BqFYoTMqg.png"
              alt=""
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className=" w-full  bg-[#1A1A1A]">
              <h2
                className={`text-base  text-[#B7B2B4]  mb-1 ${classNameTitle}`}
              >
                {servicesTitle}
              </h2>
              <p
                className={`text-white  leading-relaxed mb-2 ${classNameDescripion}`}
              >
                {servicesDescription}
              </p>
            </div>
            {serviceData && (
              <div className={`mt-1 text-[#B7B2B4] ${classNameService}`}>
                {serviceData}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesCard;
