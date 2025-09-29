import React from "react";
import SplitColorParagraph from "../global/SplitColorParagraph";

const TestimonialCard = ({
  name = "",
  role = "",
  testimonialFirstPart = "",
  testimonialSecondPart = "",
  company = "",
  icon = "",
  className = "",
}) => {
  return (
    <div
      className={`max-w-md border border-[#29292a] rounded-lg  bg-[#1f1f1f]  ${className}`}
    >
      <div className="mt-4 ml-3">
        <h3 className="text-white font-semibold">{name}</h3>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>

      <SplitColorParagraph
        firstPart={testimonialFirstPart}
        secondPart={testimonialSecondPart}
        firstColor="text-white"
        secondColor="text-gray-300"
        className="mb-1"
      />

      <div className="flex items-center justify-start gap-2 ">
        <span className="ml-2 text-gray-200 text-md">{company}</span>
        {icon && (
          <div className="text-2xl text-gray-400">
            <img className="h-5" src={icon} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
