import React from "react";
import Header from "../../features/Header/Header";
import Footer from "../../features/Footer/Footer";
import HomeImageSlider from "../../features/Atoms/HomeImageSlider";
import AboutPage from "../AboutUs/AboutPage";
import AboutProduct from "../AboutUs/AboutProduct";
// import './Home.css'

const Home = () => {
  console.log("Home");

  return (
    <div className="position-relative overflow-hidden ">
      <div className="mobile-header-hidden" >
        <Header />
      </div>
      <div>
        <HomeImageSlider />
      </div>

      <div className="">
        <AboutPage />
      </div>
      <AboutProduct />
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
