import React from 'react'
import { LinkTag, headerDiv } from './Header.Style';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "../../Redux/Product/Cart/Cart.css"

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}
const svgDiv = {

}
const logoContainer = {
  marginLeft: "100px",
  // zIndex: "20"
}
const logoImage = {
  width: "131px",
  height: "65px",
  position: "absolute",
  top: "10px",
  zIndex: "2"
}
const imgBackground = {
  width: "220px",
  height: "100px",
  backgroundColor: "white",//#198754
  position: "absolute",
  zIndex: "1",
  top: "0",
  left: "60px",
  borderRadius: "100%"

  // border:"2px solid black"
}
const Header = () => {
  const cartList = useSelector((state) => state.myCart)
  console.log("cartList", cartList);
  return (
    <div className='main-div' >
      <div className='p-3' style={{ position: "relative", top: "0", backgroundColor: "white" }}>
        <div style={headerStyle}>
          <div style={logoContainer}>
            <Link to="/"><img style={logoImage} src="https://sktperfectdemo.com/themepack/dairy/wp-content/themes/dairy-farm/images/logo.png" alt="img" /></Link>
            <div style={svgDiv}>
              <div style={imgBackground}></div>
              <svg style={{ position: "absolute", left: "0", top: "18", width: "300px", zIndex: "1" }} version="1.0" xmlns="http://www.w3.org/2000/svg" width="399.000000pt" height="130.000000pt" viewBox="0 0 399.000000 130.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,130.000000) scale(0.100000,-0.100000)" fill="white" stroke="none">
                  <path d="M0 1231 l0 -69 37 -7 c21 -4 42 -10 48 -13 9 -6 14 -8 33 -11 4 0 22
-14 39 -30 l32 -29 53 27 c96 47 208 27 272 -50 l27 -32 33 32 c18 18 40 34
47 35 8 2 23 7 34 12 37 16 137 9 182 -14 51 -27 100 -85 114 -137 15 -52 5
-262 -14 -335 -31 -112 -31 -137 -3 -165 31 -31 49 -32 77 -2 20 21 21 27 13
122 -15 169 -10 256 17 310 39 78 95 93 186 50 75 -34 150 -108 184 -180 28
-57 29 -67 29 -201 0 -86 -8 -196 -20 -284 -23 -165 -25 -231 -8 -248 17 -17
73 -15 88 4 16 18 17 117 6 444 -10 266 -1 326 54 381 33 34 59 36 117 10 91
-42 118 -134 87 -298 -10 -54 -18 -138 -18 -186 -1 -77 2 -91 18 -103 24 -17
26 -17 51 2 19 14 20 27 20 272 0 247 1 259 23 299 28 54 49 65 94 52 40 -10
102 -70 171 -164 56 -76 93 -110 139 -129 49 -21 71 -20 119 4 40 21 78 71
129 174 55 107 107 132 160 76 47 -50 65 -119 63 -242 -2 -84 1 -109 13 -119
12 -10 18 -9 32 5 18 18 19 39 11 216 -3 84 -1 100 19 137 27 52 53 67 104 60
49 -7 79 -38 109 -114 19 -50 22 -77 23 -198 0 -77 -3 -165 -8 -196 -8 -51 -6
-59 13 -78 25 -25 49 -27 77 -7 18 14 19 26 16 196 -2 138 1 195 12 241 48
185 212 246 342 127 57 -52 79 -121 70 -212 -6 -53 -4 -64 14 -84 25 -27 32
-27 55 -2 19 20 19 26 -1 191 -10 86 2 139 46 207 59 91 178 162 270 162 l40
0 0 80 0 80 -1995 0 -1995 0 0 -69z"></path>
                </g>
              </svg>

            </div>

          </div>
          <div >
            <LinkTag to="/">Home</LinkTag>
            {/* <LinkTag to="/aboutus">About Us</LinkTag> */}
            <LinkTag to="/products">Products</LinkTag>
            {/* <LinkTag to="/shop">Shop</LinkTag> */}
            <LinkTag to="/admin">Admin</LinkTag>
            <LinkTag to="/cart" className='bi bi-cart  position-relative' >{cartList.data.length > 0 && <span className='position-absolute top-0 start-100 translate-middle badge fs-6 rounded-pill bg-success'>{cartList.data.length}</span>}</LinkTag>
            <LinkTag>Login</LinkTag>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Header