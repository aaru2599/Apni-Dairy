import React from 'react'
import Header from '../../features/Header/Header';
import Footer from '../../features/Footer/Footer';
import HomeImageSlider from '../../features/Atoms/HomeImageSlider';
import AboutPage from '../AboutUs/AboutPage';
import AboutProduct from '../AboutUs/AboutProduct';

const Home = () => {
  console.log("Home");
  const imgStyle = {
    width: "100%",
    // visibility: "hidden",
    height: "500px",
    // position: "relative"
  }
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <HomeImageSlider />

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