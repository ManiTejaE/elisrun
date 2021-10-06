import React from 'react';
import { Link } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import './header.styles.scss';
import Logo from '../../assets/rexcloud_logo.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <Link to="/">
          <img src={Logo} alt="" className="logo-container" />
        </Link>

        <Link to="/contact" className="contact-link">
          <MailIcon style={{ width: '18px' }} />
          <span className="contact-text">Contact</span>
        </Link>
      </div>
      <div className="header-dropdown-wrapper">
        <div className="option-div">
          <Link to="/" className="option">
            Option
          </Link>
        </div>
        <div className="option-div">
          <Link to="/" className="option">
            Option
          </Link>
        </div>
        <div className="option-div">
          <Link to="/" className="option">
            Option
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
