import React from "react";
import ServicesCard from "../../components/services/component/ServicesCard";

const ServicesExpert = () => {
  const servicesContent = (
    <div className="flex flex-wrap gap-2 mt-3">
      {[
        "Figma Design",
        "Website Design",
        "App Design",
        "Logo",
        "Brandkit/Brand Redesign",
      ].map((service, index) => (
        <div
          key={index}
          className="bg-transparent rounded-full py-1.5 px-3 text-center border border-[#29292a] hover:border-[#3a3a3a] transition-colors"
        >
          <span className="text-white text-xs font-light whitespace-nowrap">
            {service}
          </span>
        </div>
      ))}
    </div>
  );

  const techStackContent = (
    <div className="flex flex-wrap gap-2 mt-3">
      {["Figma", "Framer", "Webflow", "HTML", "CSS", "JavaScript"].map(
        (tech, index) => (
          <div
            key={index}
            className="bg-transparent rounded-full py-1.5 px-3 text-center border border-[#29292a] hover:border-[#3a3a3a] transition-colors"
          >
            <span className="text-white text-xs font-medium whitespace-nowrap">
              {tech}
            </span>
          </div>
        )
      )}
    </div>
  );

  return (
    <div className="text-white py-6 sm:py-9 px-4 sm:px-6 lg:px-12 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 items-start  max-w-9xl  mx-auto ">
        <div className="border border-gray-700 rounded-lg bg-[#141414] min-h-[460px]">
          <ServicesCard
            servicesTitle="Services & Expertise"
            servicesDescription="From concept to launch, I craft end-to-end design solutions that bring your vision to life:"
            serviceData={servicesContent}
            classNameTitle={"font-bold text-xl text-white lg:mt-3"}
            classNameDescripion={
              "font-normal text-md text-gray-200 lg:pb-5 border-b border-gray-500"
            }
            classNameService={"lg:mb-4 lg:mt-9"}
          />

          <ServicesCard
            servicesTitle="Tech Stack & Tools"
            servicesDescription="I leverage industry-leading platforms to streamline my process and deliver production-ready assets:"
            serviceData={techStackContent}
            classNameTitle={"font-bold text-xl text-white lg:mt-3"}
            classNameDescripion={
              "font-normal text-md text-gray-200 lg:pb-5 border-b border-gray-500 "
            }
            classNameService={"lg:mb-4 lg:mt-9"}
          />
        </div>
        <div className="w-full mt-7 lg:mt-0">
          <div className="space-y-3 max-w-lg flex flex-col justify-center align-center">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight text-left ml-9 mt-19 tracking-tight">
              Turning Vision into
              <br />
              Impactful Experiences
            </h1>

            <div className="flex flex-col justify-center ml-3">
              <div className="text-md sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                <p className="mb-2 text-left  ml-9 mt-9">
                  I partner with brands and startups to transform big ideas into
                  intuitive, user-centric designs.From strategic concepting to
                  polished deliverables, every step is crafted to engage your
                  audience and drive real results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesExpert;
