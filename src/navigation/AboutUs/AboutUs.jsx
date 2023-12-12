import React from 'react'
import Header from '../../features/Header/Header';
import AboutPage from './AboutPage';

const AboutUs = () => {
  console.log("AboutUs");
  return (
    <div className='bg-light'>
      <Header />
      <div >
        <img src="src/assets/product-banner.jpg" height={150} style={{ width: "-webkit-fill-available" }} alt="" />
      </div>
     <AboutPage/>
    </div>
  )
}

export default AboutUs