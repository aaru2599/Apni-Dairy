import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageSlider.css"; // Create a CSS file for your styles
import { Fade } from "@mui/material";
import { FastForward } from "@mui/icons-material";
import { Link } from "react-router-dom";

const HomeImageSlider = () => {
  const images = [
    { url: "/assets/slider1.jpg", alt: "Image 1" },
    { url: "/assets/slider2.jpg", alt: "Image 2" },
    { url: "/assets/slider3.jpg", alt: "Image 3" },
    { url: "/assets/slider4.jpg", alt: "Image 4" },
    { url: "/assets/slider5.jpg", alt: "Image 5" },
  ];

  return (
    <div className="slider-container position-relative">
      <Carousel    showThumbs={false} onClickThumb={true}  infiniteLoop={true} autoPlay={FastForward}  animationHandler={"fade"} showArrows={true}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} height={500} style={{objectFit:"cover"}} alt={image.alt} />
          </div>
        ))}
      </Carousel>
      <div >
        <svg className="position-absolute" style={{ bottom: "0px", filter: " contrast(0.65)" }} version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400.000000 26.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,26.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
            <path d="M3740 249 c-14 -6 -38 -12 -55 -14 -206 -26 -243 -34 -300 -64 -33
-17 -81 -36 -107 -41 -27 -6 -69 -15 -95 -20 -69 -16 -223 -21 -223 -8 0 7
-15 8 -42 3 -24 -5 -60 -7 -82 -6 -51 2 -98 -14 -126 -44 -23 -24 -28 -25
-156 -25 -73 0 -179 7 -234 16 -81 13 -113 14 -164 5 -34 -6 -93 -11 -131 -11
-56 0 -76 5 -114 27 -66 40 -151 73 -186 73 -49 0 -265 -30 -327 -45 -48 -13
-62 -13 -96 -1 -21 8 -79 17 -127 21 -49 4 -105 15 -125 23 -52 23 -534 20
-637 -3 -77 -17 -89 -15 -181 39 -14 8 -60 14 -127 14 l-105 2 0 -95 0 -95
7000 0 7000 0 0 53 c0 52 0 52 -32 54 -18 0 -64 8 -103 17 -116 25 -651 26
-770 0 -38 -8 -82 -17 -97 -21 -21 -4 -30 1 -44 22 -17 26 -19 27 -83 20 -36
-4 -102 -7 -146 -6 -44 0 -102 -5 -130 -13 -46 -14 -192 -23 -465 -31 -58 -1
-148 2 -201 8 -77 9 -110 8 -172 -5 -59 -11 -87 -13 -116 -5 -29 8 -53 7 -94
-3 -38 -9 -81 -10 -138 -6 -46 4 -133 7 -194 7 -60 0 -131 0 -157 1 -152 3
-231 1 -298 -6 -62 -7 -82 -6 -107 8 -41 20 -94 20 -205 -1 -131 -25 -248 -3
-248 47 0 19 -33 25 -171 34 -32 3 -66 9 -78 15 -29 16 -297 3 -312 -16 -6 -7
-21 -13 -32 -13 -11 0 -30 -8 -41 -19 -31 -27 -139 -35 -160 -12 -14 15 -43
19 -202 24 -102 4 -224 11 -272 17 -89 11 -202 -1 -310 -31 -37 -10 -45 -9
-62 6 -16 15 -28 16 -72 10 -29 -5 -84 -7 -121 -6 -38 1 -83 -3 -101 -9 -24
-8 -41 -8 -61 0 -21 8 -41 8 -76 -1 -33 -9 -52 -9 -61 -2 -14 11 -187 10 -230
-2 -18 -5 -34 -2 -50 9 -31 22 -100 20 -159 -5 -39 -17 -59 -20 -103 -15 -30
4 -60 14 -67 22 -8 9 -29 15 -58 14 -25 -1 -71 4 -101 10 -30 6 -71 14 -90 17
-19 3 -45 13 -58 21 -33 21 -168 9 -274 -24 -50 -16 -109 -27 -150 -28 -47 -2
-73 -7 -86 -19 -10 -9 -26 -17 -35 -17 -9 0 -17 -7 -17 -15 0 -29 -43 -38
-127 -26 -135 19 -236 24 -275 13 -32 -9 -48 -6 -120 21 -80 29 -89 30 -230
28 -116 -1 -154 2 -177 14 -39 20 -56 19 -89 -4 -25 -17 -35 -18 -130 -7 -82
9 -107 15 -117 30 -12 15 -22 17 -55 12 -37 -6 -41 -4 -50 19 -14 37 -41 31
-96 -20 -28 -26 -57 -45 -71 -45 -13 0 -23 -4 -23 -10 0 -5 -12 -10 -27 -10
-19 0 -36 -10 -55 -32 l-26 -33 -40 23 c-48 26 -78 28 -149 5 -50 -16 -56 -16
-106 0 -30 9 -81 17 -115 17 -34 0 -64 5 -68 11 -4 7 -24 9 -52 6 -32 -3 -53
0 -76 14 -28 16 -142 46 -271 71 -27 5 -77 19 -110 31 -69 24 -159 31 -195 16z"></path>
          </g>
        </svg>
      </div>

      <div

        style={{
          zIndex: 100,
         
          color: "#ffffff",
        }}>

        <div style={{
          top: "150px",
          left: "100px"
        }} className="position-absolute   ">
          <div style={{ fontSize: "56px", fontWeight: "bold", }}>
            Milk Farm
          </div>
          <div style={{ fontSize: "20px" }}>
            Healthy Milk for Good Health
          </div>
        </div>
        <Link to={"/aboutus"} className="btn  px-4  py-2 rounded-pill position-absolute fs-5" style={{ top: "400px", left: "100px", backgroundColor: "#fece63" }}>Read More</Link>
      </div>
    </div>
  );
};

export default HomeImageSlider;
