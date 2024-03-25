import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/Home" className="sitename">
        Site name
      </Link>
      <ul>
        
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/Portfolio">Service</CustomLink>
        <CustomLink to="/Contact">Contact</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="navlink">
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
