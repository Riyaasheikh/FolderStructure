import React from 'react'
import NavBar from '../../../components/ui/Navbar'
import Productsblog from '../component/products/Productsblog'
import TrustedBy from '../../../components/ui/TrustedBy'
import DesignPackaging from '../../../components/ui/DesignPackaging'
import FAQ from '../../../components/ui/FAQ'
import StrategyCall from '../../../components/ui/StrategyCall'
import Footer from '../../../components/ui/Footer'

const ProductFeature = () => {
  return (
    <div>
        <NavBar type={'group2'}/>
        <Productsblog/>
        <TrustedBy/>
        <DesignPackaging/>
        <FAQ/>
        <StrategyCall/>
        <Footer/>
    </div>
  )
}

export default ProductFeature