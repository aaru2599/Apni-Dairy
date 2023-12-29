import React from 'react'
import Header from '../../features/Header/Header';
import AboutPage from './AboutPage';
import Footer from '../../features/Footer/Footer';

const AboutUs = () => {
  console.log("AboutUs");
  return (
    <div className='bg-light overflow-hidden'>
      <Header />
      <div >
        <img src="/assets/product-banner.jpg" height={150} style={{ width: "-webkit-fill-available" }} alt="" />
      </div>
      <AboutPage />
     <div className='mt-5'>
     <Footer/>
     </div>
    </div>
  )
}

export default AboutUs