import React from "react";
import SplitColorParagraph from "../../../../components/global/SplitColorParagraph";
import p2 from "../../../../assets/asset/p5.avif";

const Testimonial = () => {
  return (
    <div className="py-4 md:py-6 lg:py-8 px-4 sm:px-6 text-left lg:mb-25 lg:mt-10 ">
      <div className="bg-[#1f1f1f] rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl lg:shadow-2xl max-w-6xl mx-auto text-left p-6 sm:p-8 md:p-10 lg:p-12 border border-[#323334]">
        <div className="mb-6 sm:mb-8 md:mb-10 w-full">
          <SplitColorParagraph
            firstPart={`"Partnering with Jasmin transformed our digital presence. Her striking UI designs not only captured our brand's essence but boosted user engagement by 45%.`}
            secondPart={`From kickoff to launch, her collaborative approach and attention to detail made the whole process effortless."`}
            firstColor="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            secondColor="text-[#5e5e5e] text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            className="mb-0 leading-tight sm:leading-snug md:leading-normal w-full"
          />
        </div>
        <div className="flex items-center gap-4 sm:gap-5 w-full">
          <img
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl md:rounded-2xl object-cover flex-shrink-0"
            src={p2}
            alt="Emily Chen"
          />
          <div className="text-left">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
              Emily Chen
            </p>
            <p className="text-sm sm:text-base md:text-lg font-light text-gray-300">
              Founder & CEO, FitNest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
