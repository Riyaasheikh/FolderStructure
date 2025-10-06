import React from 'react'
import SectionHeading from '../../../../components/global/SectionHeading'
import ProfileCard from '../../../../components/global/ProfileCard'
const Productsblog = () => {
  return (
    <div className='relative '>
        <div>
            <SectionHeading title={'All-in-One Features for your Productivity'} subtitle={'lorem lorem lorem'}/>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-2 mx-auto '>
<div className='flex gap-3 absolute'>

        <ProfileCard/>
        <ProfileCard/>
</div>
<div className='flex  align-center gap-2 overflow-hidden absolute top-125'>

       

        <ProfileCard/>
        <ProfileCard/>
</div>
        </div>
    </div>
  )
}

export default Productsblog