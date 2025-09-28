import React from 'react'
import SplitColorParagraph from '../../../../components/global/SplitColorParagraph'
import p2 from '../../../../assets/asset/p2.jpeg'

const Testimonial = () => {
  return (
    <div className='py-6 tex-left'>
      <div className="bg-[#1f1f1f] rounded-3xl shadow-2xl  max-w-4xl  mx-auto text-left">
        {/* Text Content */}
        <SplitColorParagraph
          firstPart={`"Partnering with Jasmin transformed our digital presence.  
          Her striking UI designs not only captured our brand's  
          essence but boosted user engagement by 45%.`}
          secondPart={`From  
          kickoff to launch, her collaborative approach and  
          attention to detail made the whole process effortless."`}
          firstColor="text-white  text-3xl"
          secondColor="text-gray-300 text-3xl "
          className="mb-5"
        />
        
        {/* Image and Attribution - Left Aligned */}
        <div className='flex items-center gap-4 w-full'>
          <img 
            className='w-12 h-12 rounded-lg object-cover flex-shrink-0 ml-5 mb-5' 
            src={p2} 
            alt="Emily Chen" 
          />
          <div className="text-left">
            <p className='text-sm font-semibold text-white'>Emily Chen</p>
            <p className='text-sm font-light text-gray-300'>Founder & CEO, FitNest</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial