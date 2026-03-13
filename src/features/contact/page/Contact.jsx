import React,{useState,useEffect} from 'react'
import TrustedBy from '../../../components/ui/TrustedBy'
import FAQ from '../../../components/ui/FAQ'
import Footer from '../../../components/ui/Footer'
import NavBar from '../../../components/ui/Navbar'
import RemoteCollab from '../components/remote/RemoteCollab'
import Loader from '../components/global/Loader'
import StrategyClock from '../components/Strategy/StrategyClock'
import Layout from '../../../layout/Layout'
const Contact = () => {
  const [loading, setLoading] = useState(true);
    useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='bg-[#0C0C0C]'>

        <NavBar/>
      <Layout>
        <RemoteCollab/>
        
        <TrustedBy/>
        {loading ? <Loader /> : <StrategyClock />}
        <FAQ/>
        <Footer/>
      </Layout>
    </div>
  )
}

export default Contact