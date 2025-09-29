import React from "react";
import SectionHeading from "../global/SectionHeading";
import ServicesCard from "../../features/home/components/services/component/ServicesCard";
import DesignCard from "../global/DesignCard";

const DesignPackaging = () => {
  return (
    <div className="text-white  bg-black ">
      <SectionHeading
        title={"Design Packages For Every Ambigious Plan"}
        subtitle={
          "        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum soluta laboriosam modi! Eos quae quo aperiam optio est, in saepe laborum quam modi. Repellendus aliquam voluptatum sit dolorum eius."
        }
      />
      <div className="mt-30 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ">
        <div className="max-w-lg  bg-[#1f1f1f] ml-13 mt-4 rounded-lg p-6">
          <h2 className="font-bold text-2xl ml-4 mt-2 mb-3">My Work History</h2>
          <ServicesCard
            servicesTitle="2024"
            servicesDescription="NovaAI Website Overhaul"
            serviceData="SaaS • 7 screens"
          />
          <ServicesCard
            servicesTitle="2024"
            servicesDescription="Ember Pro Rebrand"
            serviceData="FinTech • Brand system"
          />
          <ServicesCard
            servicesTitle="2023"
            servicesDescription="FlowTrack Dashboard"
            serviceData="B2B Web App • UI/UX revamp"
          />
          <ServicesCard
            servicesTitle="2023"
            servicesDescription="Wanderly Mobile"
            serviceData="Travel iOS App • End-to-end product"
          />
        </div>
        <div className="bg-[#1f1f1f] mt-4 mr-19 rounded-lg ">
          <div className="border border-[#29292a] bg-[#262626] p-2 ml-2 mb-5">
            <DesignCard />
          </div>
          <div className="max-w-md mr-9 mb-6">
            <h2 className="text-white font-bold ml-9">About me</h2>
            <p className="text-gray-300 ml-9">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto laudantium voluptate aut perspiciatis vel, voluptas
              exercitationem quia culpa incidunt aliquam possimus voluptates
              soluta a, doloribus, ad harum. Nesciunt, nulla facilis! Incidunt,
              repellendus! Saepe sequi facilis reprehenderit similique corporis
              minus ab odit facere nobis beatae, culpa exercitationem molestias
              eveniet itaque quasi sunt tempora quos nam iusto in eos quidem.
              Dolor, rem? Numquam, perspiciatis? Ratione numquam cupiditate
              saepe magni ipsum! Labore, deleniti et nostrum doloremque ratione
              minus culpa sed officia, in neque nesciunt iure rem assumenda
              autem est repudiandae quisquam accusamus architecto? Corporis
              earum at enim eos corrupti rerum repellendus dicta velit modi
              nostrum quisquam perferendis qui aut iste
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignPackaging;
