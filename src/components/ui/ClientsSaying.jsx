import React from "react";
import SectionHeading from "../global/SectionHeading";
import TestimonialCard from "../global/TestinomialCard";
import { testimonialsData } from "../../data/testinomialData";

const ClientsSaying = () => {
  return (
    <div className="text-white py-6  bg-black">
      <SectionHeading
        title={
          <>
            <div>Hear What Clients Are </div>
            <div>Saying</div>
          </>
        }
        subtitle={
          "Discover how our collaborations have transformed ideas into exceptional results"
        }
        titleClassName={"mb-5"}
      />
      <div className="max-w-4xl  mx-auto px-4 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              testimonialFirstPart={testimonial.testimonialFirstPart}
              testimonialSecondPart={testimonial.testimonialSecondPart}
              company={testimonial.company}
              icon={testimonial.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSaying;
