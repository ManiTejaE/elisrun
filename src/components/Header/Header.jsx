import React from 'react';
import { Link } from 'react-router-dom';

import "./header.styles.scss"
import Logo from "../../assets/elisrun logo.png"

const Header = () => {
    return (
        <div className="header">
            <div className="header-wrapper">
                <Link to="/">
                    <img src={Logo} alt="" className="logo-container"/>
                </Link>

                <Link to="/contact">
                    <span className="contact-text">Contact</span>
                </Link>
            </div>
        </div>
    );
}

export default Header;