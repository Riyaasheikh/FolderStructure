import React from 'react'
import SectionHeading from '../../../../components/global/SectionHeading'
import PortfolioCard from '../../../../components/ui/PortfolioCard'
import p4 from '../../../../assets/asset/P4.jpeg'
import p3 from '../../../../assets/asset/p3.jpeg'
import ProjectCard from './component/ProjectCard'

const FeaturedProject = () => {
  return (
    <div className='bg-black text-white px-3 py-8 mt-8'>
        <SectionHeading 
            title={'Featured Project'} 
            subtitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit itaque commodi perferendis, repellat dolore illum illo nemo id voluptatibus recusandae minus laborum eos nam aliquid libero sed asperiores ad provident.'}
            titleClassName={'text-normal'} 
            subtitleClassName={'text-gray-400'}
        />
        <div className="flex gap-2 mt-7 justify-center">
          <PortfolioCard 
            image={p4} 
            image2={p3} 
            title={'Rewait — Waitlist Platform'} 
            description={'Crafted a clean, convenient focused landing page..."'} 
            btn={'Learn More->'}
          />
          <PortfolioCard 
            image={p4} 
            image2={p3} 
            title={'FitNest — Fitness App UI/UX'} 
            description={'Designed the end-to-end mobile experience...'} 
            btn={'Learn More->'}  
          />
        </div>
        <div>

          <ProjectCard title={'WholeHome — Smart Home Dashboard'} description={'Birth & responsive web interface for smart-home control. Balanced sales-manufacturing on a steel, skin-made aesthetic for make monitoring and managing devices a delight.'} btn={'Learn More->'} image={p4} image2={p3}/>
        </div>
    </div>
  )
}

export default FeaturedProject