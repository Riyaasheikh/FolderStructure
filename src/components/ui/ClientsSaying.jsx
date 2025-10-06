import React from "react";
import SectionHeading from "../global/SectionHeading";
import TestimonialCard from "../global/TestinomialCard";
import { testimonialsData } from "../../data/testinomialData";

const ClientsSaying = () => {
  return (
    <div className="text-white py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hear What Clients Are Saying
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover how our collaborations have transformed ideas into exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              testimonialFirstPart={testimonial.testimonialFirstPart}
              testimonialSecondPart={testimonial.testimonialSecondPart}
              company={testimonial.company}
              icon={testimonial.icon}
              className="border border-[#323334]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSaying;