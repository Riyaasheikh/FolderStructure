import React from 'react'

const SectionHeading = ({ 
  title, 
  subtitle, 
  titleClassName ='', 
  subtitleClassName = "" 
}) => {
  return (
    <div className="text-center max-w-3xl mx-auto ">
      <h2 className={`text-3xl md:text-5xl ${titleClassName}`}>
        {title}
      </h2>
      <p className={`text-sm md:text-xs mt-2 text-base/7 leading-relaxed ${subtitleClassName}`}>
  {subtitle}
</p>


    </div>
  )
}

export default SectionHeading