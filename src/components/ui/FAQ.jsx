import React, { useState } from "react";
import AccordinCom from "../../features/home/components/AccordinCom";
import { accordioData } from "../../data/accordinData";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); 

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2   gap-15 text-white bg-black py-10 mt-3 px-4 sm:px-5 lg:px-2 max-w-6xl mx-auto">
      <div className="flex flex-col  ">
        <div className="mb-5 ">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-left">
            Frequently Asked Questions
          </h2>
          <p className="text-[#B4B4B4] text-lg">
            Have another question? Please contact our team!
          </p>
        </div>
        
      </div>

      {/* Right Column - Accordions */}
      <div className="space-y-2 ">
        {accordioData.map((item, index) => (
          <AccordinCom 
            key={index} 
            title={item.title} 
            content={item.content}
            isOpen={openIndex === index}
            onToggle={() => toggleAccordion(index)}
            className={'border border-[#323334]'}
            
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;