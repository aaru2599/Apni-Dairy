import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../Atoms/Logo';
import { LinkTag, headerDiv } from './Header.Style';

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}
const Header = () => {

  return (
    <header className=' mt-2 bg-success p-3'>
      <div style={headerStyle}>
        <Logo/>
        <div >
          <LinkTag to="/home">Home</LinkTag>
          <LinkTag to="/aboutus">About Us</LinkTag>
          <LinkTag to="/products">Products</LinkTag>
          <LinkTag to="/shop">Shop</LinkTag>
          <LinkTag to="/admin">Admin</LinkTag>
        </div>

      </div>
    </header>
  )
}
export default Header