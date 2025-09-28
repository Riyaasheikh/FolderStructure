import React from 'react'

const ProjectCard = ({title, description, btn, image, image2}) => {
  return (
    <div className='bg-[#131313] text-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl px-8 py-2 mt-2 mx-auto'>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
        {/* Left Side - Text Content */}
        <div className='flex-1 lg:max-w-lg'>
          <div className='text-3xl font-bold text-white mb-4'>
            {title}
          </div>
          <div className='text-gray-300 mb-6 text-lg leading-relaxed'>
            {description}
          </div>
          <div className='mb-5'>
            {btn}
          </div>
        </div>
        
        {/* Right Side - Images */}
        <div className='flex-1 lg:max-w-lg'>
          <div className='relative bg-[#332c2c] rounded-lg h-80 flex items-center justify-center'>
            <img src={image} alt={title} className='absolute h-69 w-48 rounded-lg object-cover z-10 left-3' />
            <img src={image2} alt={title} className='absolute h-60 w-40 rounded-lg object-cover z-20 left-55 opacity-90'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard