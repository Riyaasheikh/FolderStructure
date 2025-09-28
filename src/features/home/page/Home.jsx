import React from 'react'
import NavBar from '../../../components/ui/Navbar'
import HeroSection from '../components/hero/HeroSection'
import TrustedBy from '../../../components/ui/TrustedBy'
import FeaturedProject from '../components/projects/FeaturedProject'
import Testimonial from '../components/testimonials/Testimonial'
import ServicesExpert from '../components/services/ServicesExpert'
import FlexiblePlans from '../components/plans/FlexiblePlans'
import DesignPackaging from '../../../components/ui/DesignPackaging'
import ClientsSaying from '../../../components/ui/ClientsSaying'
import FAQ from '../../../components/ui/FAQ'
import StrategyCall from '../../../components/ui/StrategyCall'
import Footer from '../../../components/ui/Footer'

const Home = () => {
  return (
    <div className='bg-black'>
        <NavBar type={"group1"} />
        <HeroSection/>
        <TrustedBy/>
        <FeaturedProject/>
        <Testimonial/>
        <ServicesExpert/>
        <DesignPackaging/>
        <FlexiblePlans/>
        <TrustedBy/>
        <ClientsSaying/>
        <FAQ/>
        <StrategyCall/>
        <Footer/>
    </div>
  )
}

export default Home