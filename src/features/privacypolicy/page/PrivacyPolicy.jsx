import React from 'react'
import NavBar from '../../../components/ui/Navbar'
import PrivacyPolicyComponent from '../components/PrivacyPolicyComponent'
import Footer from '../../../components/ui/Footer'

const PrivacyPolicy = () => {
  return (
    <div>
        <NavBar type={'group2'}/>
        <PrivacyPolicyComponent/>
        <Footer/>
    </div>
  )
}

export default PrivacyPolicy