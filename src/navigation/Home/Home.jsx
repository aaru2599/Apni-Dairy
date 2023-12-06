import React from 'react'
import Header from '../../features/Header/Header';
import Footer from '../../features/Footer/Footer';
import HomeImageSlider from '../../features/Atoms/HomeImageSlider';

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
     <HomeImageSlider/>

      <div className='mt-4'>
        <Footer />
      </div>
    </div>
  )
}
export default Home