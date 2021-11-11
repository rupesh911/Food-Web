import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="NavBar-Wrapper">
      <div>
     
        <h3 className="NavBar-Title">Food Ordering Portal</h3>
      </div>
      <div className="NavBar-Links">
        <Link to="/cart" className="NavBar-Link"><i className="fa fa-shopping-cart light"></i></Link>
        {/* <span className="light">0</span> */}
      </div>
    </nav>
  );
};

export default NavBar;