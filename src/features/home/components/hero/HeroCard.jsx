import React from 'react'
import SectionHeading from '../../../../components/global/SectionHeading'
import Buttons from '../../../../components/global/Buttons'

const HeroCard = () => {
  return (
    <div>
      <Buttons button1={'🏵 Available for Work'} 
      className={'!bg-[#464646]'}/>
      <SectionHeading  
  title={
    <>
      <div className="text-left w-full">Design Your Future</div>
      <div className="text-left w-full">with Purpose &</div>
      <div className="text-left w-full ">Precision</div>
    </>
  } 
  subtitle={
    <>
    <div className="text-left w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit</div>
      <div className="text-left w-full"> Nam, repellendus minus reprehenderit earum voluptatem ipsum quia</div>
      <div className="text-left w-full"> a accusantium debitis modi qui eaque vel aut.</div>

    </>
  }
  titleClassName={'text-white font-medium flex flex-col items-start antialiased'} 
  subtitleClassName={'text-white font-light items-start'}
/>
       </div>
  )
}

export default HeroCard