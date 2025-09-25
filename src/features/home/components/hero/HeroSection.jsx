import React from 'react'
import HeroCard from './HeroCard'
import heroImg from '../../../../assets/asset/p1.jpeg' // Add correct file extension
import Buttons from '../../../../components/global/Buttons'

const HeroSection = () => {
  return (
    <div>
        <HeroCard/>
        <div>
            <img src={heroImg} alt="Hero" />
            <Buttons/>
        </div>
    </div>
  )
}

export default HeroSection