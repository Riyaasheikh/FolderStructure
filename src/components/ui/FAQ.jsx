import React from "react";
import SectionHeading from "../global/SectionHeading";
import Buttons from "../global/Buttons";
import AccordinCom from "../../features/home/components/AccordinCom";
import { accordioData } from '../../data/accordinData'; // 👈 import data

const FAQ = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-white bg-black">
      {/* Left side */}
      <div className="flex flex-col gap-8">
        <SectionHeading
          title={
            <>
              <div>Frequent</div>
              <div>Asked Question</div>
            </>
          }
          subtitle={"Have Another Question? Please Contact Our Team "}
          titleClassName={"text-white text-left ml-5 mt-9"}
          subtitleClassName={"text-white text-left ml-5 mt-6"}
        />
        <Buttons
          button1={"Contact Our Team"}
          className="bg-white text-black relative ml-39 mb-6"
        />
      </div>

      {/* Right side with accordions */}
      <div className="right max-w-xl mx-auto">
        {accordioData.map((item, i) => (
          <AccordinCom key={i} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
