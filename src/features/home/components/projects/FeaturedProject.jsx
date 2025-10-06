import React from 'react'
import SectionHeading from '../../../../components/global/SectionHeading'
import PortfolioCard from '../../../../components/ui/PortfolioCard'
import p3 from '../../../../assets/asset/p7.avif';
import p4 from "../../../../assets/asset/p8.avif";
import Buttons from '../../../../components/global/Buttons'

const FeaturedProject = () => {
  return (
    <div className='bg-black text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16'>
        <SectionHeading 
            title={'Featured Project'} 
            subtitle={'A curated showcase of my favourite design challenges—where strategy, aesthetics, and user experience come together.'}
            titleClassName={'text-2xl sm:text-3xl lg:text-4xl mb-6 font-bold text-center'} 
            subtitleClassName={'text-gray-400 text-sm sm:text-base lg:text-lg text-center max-w-4xl mx-auto mt-4'}
        />
        <div className="flex flex-col lg:flex-row  relative  mt-8 sm:mt-12 lg:mt-16 justify-center items-stretch">
          <div className="flex-1 max-w-xl m-2">
            <PortfolioCard 
              image={p4} 
              title={'Rewait — Waitlist Platform'} 
              description={'Crafted a clean, convenient focused landing page with modern design principles and user-friendly interface.'} 
              btn={'Learn More'}
            />
          </div>
          <div className="flex-1 max-w-xl max-h-xl m-2">
            <PortfolioCard 
              image={p3}  
              title={'FitNest — Fitness App UI/UX'} 
              description={'Designed the end-to-end mobile experience with intuitive navigation and engaging user interactions.'} 
              btn={'Learn More'}  
            />
          </div>
        
        </div>
        <div className='flex align-center justify-center mt-6 lg:py-6 '>
          <Buttons button1={'See More Projects'} className='bg-[#141414] text-white px-4 py-3' />
        </div>
    </div>
  )
}

export default FeaturedProject