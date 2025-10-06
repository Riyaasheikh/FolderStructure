import React from "react";
import SectionHeading from "../global/SectionHeading";
import ServicesCard from "../../features/home/components/services/component/ServicesCard";
import DesignCard from "../global/DesignCard";

const DesignPackaging = () => {
  return (
    <div className="text-white bg-black py-8 sm:py-12 lg:py-16">
      <div className="px-4 sm:px-6 lg:px-7 max-w-full ">
        <SectionHeading
          title={
            <>
            <div>Design Packages For Every</div>
            <div>Ambitious Plan</div>
            </>}
          subtitle={
            <>
              <div>High‑impact visuals and UX—minus the agency overhead</div>
            </>

          }
          titleClassName={"text-2xl sm:text-3xl lg:text-[48px] font-normal leading-tight m-6 "}
          subtitleClassName={"text-[#B4B4B4] mb-4"}
        />
        
        <div className="mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-12 items-start ">
          <div className="w-full max-w-3xl  lg:mx-0 lg:max-w-4xl bg-[#141414] rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-[#323334]">
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6 text-white">
              My Work History
            </h2>
            
            <div className="space-y-4  sm:space-y-5">
              <ServicesCard
                servicesTitle="2024"
                servicesDescription="NovaAI Website Overhaul"
                serviceData="SaaS • 7 screens"
                className="bg-transparent"
                classNameDescripion={'font-bold text-xl'}
              />
              <ServicesCard
                servicesTitle="2024"
                servicesDescription="Ember Pro Rebrand"
                serviceData="FinTech • Brand system"
                className="bg-transparent"
                classNameDescripion={'font-bold text-xl'}
              />
              <ServicesCard
                servicesTitle="2023"
                servicesDescription="FlowTrack Dashboard"
                serviceData="B2B Web App • UI/UX revamp"
                className="bg-transparent"
                classNameDescripion={'font-bold text-xl'}
              />
              <ServicesCard
                servicesTitle="2023"
                servicesDescription="Wanderly Mobile"
                serviceData="Travel iOS App • End-to-end product"
                className="bg-transparent"
                classNameDescripion={'font-bold text-xl'}
              />
            </div>
          </div>
          <div className="w-full max-w-2xl mx-auto lg:mx-0">
            <div className="bg-[#1f1f1f] rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-[#323334]">
              <div className="border border-[#323334] bg-[#262626] rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
                <DesignCard />
              </div>
              <div className="max-w-full">
                <h2 className="text-white font-bold text-xl sm:text-2xl mb-3 sm:mb-4">
                  About me
                </h2>
                <div className="text-[#b7b7b9] lg:text-xl sm:text-base leading-relaxed space-y-3 sm:space-y-4">
                  <p>
                   Hi, I’m Jasmin Paul, a multidisciplinary product & UI/UX designer based in Poland. I turn complex challenges into clean, intuitive experiences—whether it’s a website, mobile app, or full brand overhaul.
                  </p>
                  <p>
                    With over 6 years of hands-on design practice, I blend user research, strategic thinking, and pixel-perfect crafting to build products that delight users and drive real results. I’ve partnered with bootstrapped startups and global teams alike, always starting from empathy and ending with impactful, scalable solutions. Every design decision is rooted in user insights and feedback loops.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignPackaging;