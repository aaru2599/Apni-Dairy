import { LinkTag } from "./Header.Style";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../Redux/Product/Cart/Cart.css";
import useIsMobile from "../../Components/IsMobile";
import styled from "styled-components";
import HeaderOffCanvas from "./HeaderOffCanvas";

const navStyle = {
  display: "block",
};

const responsiveNavStyle = {
  display: "none",
};

const svgStyle = {
  position: "absolute",
  left: "0",
  top: "18",
  width: "300px",
  zIndex: "1",
};
const responsiveSvgStyle = {
  // width: "100%",
  position: "absolute",
  left: "0",
  top: "10",
  width: "100%",
  zIndex: "1",
};

// console.log("IsMobile",useIsMobileOrTablet?"hello":"nhi hello");
const Header = () => {
  // console.log("hello");
  const isMobileAndTab = useIsMobile();
  console.log("isMobAndTab", isMobileAndTab);
  const cartList = useSelector((state) => state.myCart);
  console.log("cartList", cartList);
  return (
    <div className="main-div" style={{ position: "sticky", top: "0" }}>
      <div
        className="p-3"
        style={{ position: "sticky", top: "0", backgroundColor: "white" }}
      >
        <MainHeader>
          <LogoContainer>
            <div
              className="btn position-absolute d-block d-md-none  "
              style={{
                top: "0px",
                left: "20px",
                position: "absolute",
                zIndex: "10",
              }}
            >
              <div style={{position:"relative"}}>
                <img
                  src="/assets/cloud.png"
                  width={50}
                  style={{ filter: "drop-shadow(0 0 0.75rem gray)" }}
                  height={50}
                  alt=""
                />
                <div style={{position:"absolute", top:"5px ",left:"5px" }}>
                  <HeaderOffCanvas />
                </div>
              </div>
            </div>
            <button
              className="btn position-absolute d-block d-md-none  "
              style={{
                top: "5px",
                right: "20px",
                position: "absolute",
                zIndex: "10",
              }}
            >
              <LinkTag
                to="/cart"
                className="bi bi-cart-check  position-relative"
                style={{ marginRight: "0px" }}
              >
                {cartList.data.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge fs-6 rounded-pill bg-success">
                    {cartList.data.length}
                  </span>
                )}
              </LinkTag>
            </button>

            <Link to="/">
              <img src="/assets/logo.png" className="logo-image" alt="img" />
            </Link>
            <svg
              className=""
              style={isMobileAndTab ? responsiveSvgStyle : svgStyle}
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="399.000000pt"
              height="130.000000pt"
              viewBox="0 0 399.000000 130.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,130.000000) scale(0.100000,-0.100000)"
                fill="white"
                stroke="none"
              >
                <path
                  d="M0 1231 l0 -69 37 -7 c21 -4 42 -10 48 -13 9 -6 14 -8 33 -11 4 0 22
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
0 0 80 0 80 -1995 0 -1995 0 0 -69z"
                ></path>
              </g>
            </svg>
          </LogoContainer>
          <div style={isMobileAndTab ? responsiveNavStyle : navStyle}>
            <LinkTag to="/">Home</LinkTag>
            {/* <LinkTag to="/aboutus">About Us</LinkTag> */}
            <LinkTag to="/products">Products</LinkTag>
            {/* <LinkTag to="/shop">Shop</LinkTag> */}
            <LinkTag to="/admin">Admin</LinkTag>
            <LinkTag to="/cart" className="bi bi-cart  position-relative">
              {cartList.data.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge fs-6 rounded-pill bg-success">
                  {cartList.data.length}
                </span>
              )}
            </LinkTag>
            <LinkTag>Login</LinkTag>
          </div>
        </MainHeader>
      </div>
    </div>
  );
};
export default Header;

const LogoContainer = styled.div`
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    // display: flex;
    // justify-content: center;
    // align-items: center;
  }

  @media (max-width: 768px) {
    .logo-image {
      position: absolute;
      objectfit: contain;
      top: 50%;
      left: 40%;
      background-color: white;
      width: 100px;
      height: 50px;
      z-index: 2;
    }
  }
  .logo-image {
    width: 100px;
    height: 50px;
    position: absolute;
    objectfit: contain;
    // top: 10px;
    z-index: 2;
  }
`;
const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
