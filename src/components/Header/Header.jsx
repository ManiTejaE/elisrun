import React from 'react';
import { Link } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import './header.styles.scss';
import Logo from '../../assets/rexcloud_logo.svg';
import NestedMenuItem from 'material-ui-nested-menu-item';
import { Container, Menu, MenuItem } from '@material-ui/core';
import { Box } from '@mui/system';
const Header = () => {
  const [menuPosition1, setMenuPosition1] = React.useState(null);
  const [menuPosition2, setMenuPosition2] = React.useState(null);

  const handleOptionsMenu1Click = (event) => {
    if (menuPosition1) {
      return;
    }
    event.preventDefault();
    setMenuPosition1({
      top: 64,
      left: event.pageX,
    });
    console.log(event.pageX, event.pageY);
  };
  const handleOptionsMenu2Click = (event) => {
    if (menuPosition2) {
      return;
    }
    event.preventDefault();
    setMenuPosition2({
      top: 64,
      left: event.pageX,
    });
  };
  const handleOptionsMenu1Close = () => {
    setMenuPosition1(null);
  };
  const handleOptionsMenu2Close = () => {
    setMenuPosition2(null);
  };

  return (
    <Box className="header">
      <Box className="header-wrapper">
        <Link to="/">
          <img src={Logo} alt="" className="logo-container" />
        </Link>

        <Link to="/contact" className="contact-link">
          <MailIcon style={{ width: '18px' }} />
          <span className="contact-text">Contact</span>
        </Link>
      </Box>
      <Box className="header-dropdown-wrapper">
        <Box className="options-menu">
          <button className="option-btn" onClick={handleOptionsMenu1Click}>
            <span className="option-text">Solutions</span>
          </button>
          <Menu
            open={!!menuPosition1}
            onClose={() => setMenuPosition1(null)}
            anchorReference="anchorPosition"
            anchorPosition={menuPosition1}
          >
            <MenuItem>RexCloud</MenuItem>
            <NestedMenuItem
              label="IIoT Edge Gateways"
              parentMenuOpen={!!menuPosition1}
            >
              <MenuItem>REX-EDGE 1525-EP</MenuItem>
              <MenuItem>REX-EDGE 1525-EX</MenuItem>
            </NestedMenuItem>
          </Menu>
        </Box>
        <Box className="options-menu">
          <button className="option-btn" onClick={handleOptionsMenu2Click}>
            <span className="option-text">About Us</span>
          </button>
          <Menu
            open={!!menuPosition2}
            onClose={() => setMenuPosition2(null)}
            anchorReference="anchorPosition"
            anchorPosition={menuPosition2}
          >
            <MenuItem onClick={handleOptionsMenu2Close}>
              Industrial IOT
            </MenuItem>
            <MenuItem onClick={handleOptionsMenu2Close}>
              Wireless Solution
            </MenuItem>
            <MenuItem onClick={handleOptionsMenu2Close}>
              Preventive and Predictive Maintenance
            </MenuItem>
            <MenuItem onClick={handleOptionsMenu2Close}>
              Water and waste water management
            </MenuItem>
            <MenuItem onClick={handleOptionsMenu2Close}>Energy</MenuItem>
            <MenuItem onClick={handleOptionsMenu2Close}>
              Building Management
            </MenuItem>
          </Menu>
        </Box>
        <Box className="options-menu">
          <button className="option-btn">
            <Link to="/career" className="option-text">
              Career
            </Link>
          </button>
        </Box>
      </Box>
      <Box className="links-wrapper">
        <Link to="/" className="link-item">
          <span className="link-text">Products & Services</span>
        </Link>
        <Link to="/" className="link-item">
          <span className="link-text">Market-specific solutions</span>
        </Link>
        <Link to="/" className="link-item">
          <span className="link-text">Company</span>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
