import React from 'react'
import WorkCard from '../Component/WorkCard'
import NavBar from '../../../components/ui/Navbar'
import TrustedBy from '../../../components/ui/TrustedBy'
import DesignPackaging from '../../../components/ui/DesignPackaging'
import FAQ from '../../../components/ui/FAQ'
import StrategyCall from '../../../components/ui/StrategyCall'
import Footer from '../../../components/ui/Footer'
import Layout from '../../../layout/Layout'

const Work = () => {
  return (
    <div className='bg-[#0C0C0C]'>
        <NavBar/>
      <Layout>

        <WorkCard/>
        <TrustedBy/>
        <DesignPackaging/>
        <FAQ/>
        <StrategyCall/>
        <Footer/>
      </Layout>
    </div>
  )
}

export default Work