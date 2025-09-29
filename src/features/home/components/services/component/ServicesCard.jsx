import React from "react";

const ServicesCard = ({
  className = "",
  servicesTitle = "",
  servicesDescription = "",
  serviceData = "",
}) => {
  return (
    <div
      className={`max-w-3xl  rounded-full pt-2 bg-[#1f1f1f] ml-2 ${className}`}
    >
      <section className="mb-8">
        <div className="flex items-start gap-3 mb-2 border border-[#29292a] bg-[#262626] rounded-md">
          <div className="text-3xl border border-[#b7b7b9] mt-1 ml-2 py-3 px-4 rounded items-center">
            🍁
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white ">
              {servicesTitle}
            </h2>
            <p className="text-gray-400 text-sm">{servicesDescription}</p>
            {serviceData}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesCard;
