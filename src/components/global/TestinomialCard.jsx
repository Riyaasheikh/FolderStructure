import React from "react";

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
      className={`w-full border border-[#29292a] rounded-xl bg-[#1f1f1f] p-5 hover:border-[#3a3a3a] transition-all duration-300 ${className}`}
    >
      <div className="mb-4">
        <h3 className="text-white font-semibold text-lg">{name}</h3>
        <p className="text-gray-400 text-sm mt-1">{role}</p>
      </div>

      <div className="mb-4">
        <p className="text-white text-md leading-relaxed ">
          {testimonialFirstPart}
        </p>
        {testimonialSecondPart && (
          <p className="text-gray-300 text-md leading-relaxed">
            {testimonialSecondPart}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-[#29292a]">
        <span className="text-gray-200 text-sm">{company}</span>
        {icon && (
          <div className="text-gray-400">
            <img className="h-5" src={icon} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
