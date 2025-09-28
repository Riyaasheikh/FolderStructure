import React from 'react';

const SplitColorParagraph = ({ 
  firstPart, 
  secondPart, 
  className = '',
  firstColor = 'text-gray-800',
  secondColor = 'text-gray-500',
  alignment = 'left'
}) => {
  return (
    <div className={`max-w-3xl mx-auto  my-3 p-3 ${className}`}>
      <p className={`text-lg leading-relaxed text-${alignment}`}>
        <span className={firstColor}>{firstPart}</span>
        <span className={secondColor}> {secondPart}</span>
      </p>
    </div>
  );
};

export default SplitColorParagraph;