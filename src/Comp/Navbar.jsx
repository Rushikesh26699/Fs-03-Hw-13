import React from 'react';
import {Link} from "react-router-dom"
import "./Navbar.css"

function Navbar(props) {
    return (
        <div className='navbar'>
            <h2>G-MALL</h2>
            <Link id='link' to="/">Home</Link>
            <Link id='link' to="/products">Products</Link>
            <Link id='link' to="/contactus">ContactUs</Link>
        </div>
    );
}

export default Navbar;