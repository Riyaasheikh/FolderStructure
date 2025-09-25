import React from 'react'
import SectionHeading from '../global/SectionHeading'
import logo1 from '../../assets/icons/profile_icon.png'
import logo2 from '../../assets/icons/quality_icon.png'
import logo3 from '../../assets/icons/razorpay_logo.png'

const TrustedBy = () => {
  return (
    <div>
        <SectionHeading subtitle={'Trusted my 1000 clients'}/>
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />

    </div>
  )
}

export default TrustedBy