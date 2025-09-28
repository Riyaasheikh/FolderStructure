import React from 'react'

const Buttons = ({ button1, className = "" }) => {
  
  return (
    <section>
      <button className={`  rounded-full px-7 py-2 border border-gray-800 hover:border-gray-700 transition-all duration-200 font-medium ${className}`}>
        {button1}
      </button>
    </section>
  )
}

export default Buttons