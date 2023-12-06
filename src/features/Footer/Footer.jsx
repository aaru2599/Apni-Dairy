import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {

    return (
        <div className='mw-1100px  bg-dark text-light'>
            <div className='d-flex p-4 justify-content-around '>
                <div className='w-25'>
                    <h2>{`About Us`.toUpperCase()}</h2>
                    <p style={{ width: "250px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum modi officia, dolorem molestiae quia! Incidunt </p>
                </div>
                <div className='w-25'>
                    <h2> {`Our Services`.toUpperCase()}</h2>
                    <div>
                        <ul className='list-unstyled serviceStyle' >
                            <li><Link to="/">Dairy Product</Link></li>
                            <li><Link to="/">Bakery Product</Link></li>
                            <li><Link to="/">Food Product</Link></li>

                        </ul>
                    </div>
                </div>
                <div className='w-25'>
                    <h2> {`Quick Links`.toUpperCase()}</h2>
                    <div>
                        <ul className='list-unstyled serviceStyle'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/aboutus">AboutUs</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/products">Contact Us</Link></li>
                        
                        </ul>
                    </div>
                </div>
                <div className='w-25'>

                    <h2>{`Contact Info`.toUpperCase()}</h2>
                    <div>
                        <p>
                            Street 238,52 tempor
                            Donec ultricies mattis nulla
                            risus tristique ut.
                        </p>
                        <p>
                            Phone: +01 23 456 7890
                        </p>
                        <p>
                            E-mail:support@apnidairy.com
                        </p>
                        <p>
                            Website:https://apnidairy.com
                        </p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer