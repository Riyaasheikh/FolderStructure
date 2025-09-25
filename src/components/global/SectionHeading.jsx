import React from 'react'

const SectionHeading = ({ 
  title, 
  subtitle, 
  titleClassName = "", 
  subtitleClassName = "" 
}) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${titleClassName}`}>
        {title}
      </h2>
      <p className={`text-sm md:text-xs text-white/70 font-light leading-relaxed ${subtitleClassName}`}>
  {subtitle}
</p>

    </div>
  )
}

export default SectionHeading