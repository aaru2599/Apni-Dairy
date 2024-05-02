import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { LinkTag } from "./Header.Style";

function HeaderOffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCategoryClose = () => {
    handleClose();
  };
  return (
    <>
      <Button
        className="bi bi-menu-button bg-transparent text-black border-0"
        onClick={handleShow}
      >
       
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="w-screen md:w-[100px] "
        placement="end"
        
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Category</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="flex flex-column gap-3 text-center ">
          {/* <Offcanvas.Header onClick={handleCategoryClose}>
            <Link
              onClick={handleCategoryClose}
              to={"/"}
              className=" no-underline text-stone-400 p-2 w-[100%] bg-slate-100 border text-[20px] text-center rounded font-[500]"
            ></Link>
          </Offcanvas.Header> */}

          <LinkTag to="/">Home</LinkTag>
          {/* <LinkTag to="/aboutus">About Us</LinkTag> */}
          <LinkTag to="/products">Products</LinkTag>
          {/* <LinkTag to="/shop">Shop</LinkTag> */}
          <LinkTag to="/admin">Admin</LinkTag>
          <LinkTag to={"/aboutus"}>About US</LinkTag>
          <LinkTag>Login</LinkTag>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default HeaderOffCanvas;
