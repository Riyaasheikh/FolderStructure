import React from 'react'
import NavBar from '../../../components/ui/Navbar'
import HeroSect from '../component/hero/HeroSect'
import Calender from '../component/calender/Calender'
import TrustedBy from '../../../components/ui/TrustedBy'
import ClientsSaying from '../../../components/ui/ClientsSaying'
import FAQ from '../../../components/ui/FAQ'
import StrategyCall from '../../../components/ui/StrategyCall'
import Footer from '../../../components/ui/Footer'

const RemoteCollaboration = () => {
  return (
    <div>
        <NavBar type={'group2'}/>
        <HeroSect/>
        <Calender/>
        <TrustedBy/>
        <ClientsSaying/>
        <FAQ/>
        <StrategyCall/>
        <Footer/>
    </div>
  )
}

export default RemoteCollaboration