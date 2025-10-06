import React from "react";

const SectionHeading = ({
  title,
  subtitle,
  titleClassName = "",
  subtitleClassName = "",
}) => {
  return (
    <div className="text-center max-w-3xl mx-auto px-2 sm:px-4">
      <h2 className={`${titleClassName}`}>{title}</h2>
      <p className={`mt-3 sm:mt-4 lg:mt-2 leading-relaxed ${subtitleClassName}`}>
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;