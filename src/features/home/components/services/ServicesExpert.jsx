import React from 'react'
import ServicesCard from './component/ServicesCard'
import Buttons from '../../../../components/global/Buttons'

const ServicesExpert = () => {
  const servicesContent = (
    <div className="grid grid-cols-4 md:grid-cols-4 gap-2 mt-2 ml-2">
      {["Figma Design", "Website Design", "App Design", "Logo", "Brand Redesign"].map((service, index) => (
        <div key={index} className="bg-transparent rounded-full py-2 px-5 text-center border border-[#29292a]">
          <span className="text-white text-sm font-light whitespace-nowrap">{service}</span>
        </div>
      ))}
    </div>
  )

  const techStackContent = (
    <div className="grid grid-cols-6 ">
      {["Figma", "Framer", "Webflow", "HTML", "CSS", "JavaScript"].map((tech, index) => (
        <div key={index} className="bg-transparent rounded-full py-2 text-center border border-[#29292a]">
          <span className="text-white text-sm font-medium whitespace-nowrap">{tech}</span>
        </div>
      ))}
    </div>
  )

  return (
    <div className='text-white py-12 '>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start '>
        {/* Left Column - Services Card */}
        <div className='max-w-md bg-[#1f1f1f] ml-14 rounded-lg p-3'>
          <ServicesCard 
            servicesTitle="Services & Expertise"
            servicesDescription="From concept to launch, I craft end-to-end design solutions that bring your vision to life:"
          />
          {servicesContent}
          
          <div className="">
            <ServicesCard 
              servicesTitle='Tech Stack & Tools' 
              servicesDescription='I leverage industry-leading platforms to streamline my process and deliver production-ready assets:'
            />
            {techStackContent}
          </div>
        </div>
        
        {/* Right Column - Hero Content */}
        <div className='w-full mt-4'>
          <div className='space-y-6'>
            <div>
              <h1 className="text-3xl lg:text-5xl font-normal leading-tight text-left">
                Turning Vision into<br />
                Impactful Experiences
              </h1>
            </div>
            
            <div className='space-y-2 text-lg text-gray-300  whitespace-normal'>
              <div className="text-left ">I partner with brands and startups to transform big ideas into intuitive,</div>
              <div className="text-left "> user-centric designs. From strategic concepting to polished deliverables,</div>
              <div className="text-left "> every step is crafted to engage your audience and drive real results.</div>
            </div>
            <div className='pt-4'>
              <Buttons button1={'Discover My Approach'} className={'bg-white text-black'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesExpert