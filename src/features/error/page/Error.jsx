import React from 'react'
import NavBar from '../../../components/ui/Navbar'
import ErrorComponent from '../component/ErrorComponent'
import Footer from '../../../components/ui/Footer'

const Error = () => {
  return (
    <div>
        <NavBar type={'group2'}/>
        <ErrorComponent/>
        <Footer/>
    </div>
  )
}

export default Error