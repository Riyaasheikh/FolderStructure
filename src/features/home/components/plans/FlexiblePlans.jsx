import React from 'react'
import SectionHeading from '../../../../components/global/SectionHeading'
import PlanComponent from './component/PlanComponent'

const FlexiblePlans = () => {
  return (
    <div className='mt-10 '>

    <div className='text-white mt-15 mb-15'>
      <SectionHeading title={
        <>
        <div>Flexible Plans for</div>
        <div>Every Project</div>
        </>} subtitle={<>
        <div>Transparent, scalable packages—designed to fit </div>
        <div>startups, small businesses, and enterprise teams.</div>
        </>} titleClassName={'mt-5 mb-8'} subtitleClassName={'text-gray-300'}/>
      <div>
        <PlanComponent/>
      </div>
    </div>
    </div>
  )
}

export default FlexiblePlans