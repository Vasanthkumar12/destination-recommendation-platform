
import React from 'react';
import './Navbar.css';
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h1>Destinova</h1>
      </div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <button className="register-btn">Register</button>
      </div>
    </nav>
  );
};

export default NavBar;