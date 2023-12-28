import React from 'react'
import Header from '../../features/Header/Header';
import Footer from '../../features/Footer/Footer';
import HomeImageSlider from '../../features/Atoms/HomeImageSlider';
import AboutPage from '../AboutUs/AboutPage';
import AboutProduct from '../AboutUs/AboutProduct';

const Home = () => {
  console.log("Home");

  return (
    <div className='position-relative overflow-hidden'>
     <div className=''>
     <Header   />
     </div>
     <div>
     <HomeImageSlider />

     </div>
      <div className='mt-4'>
        <AboutPage />
        <AboutProduct />
        <div >
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default Home