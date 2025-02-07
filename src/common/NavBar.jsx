import React from 'react'
import { NavLink } from "react-router-dom";
import logo from "../assets/Destinova.png";
import "../styles/NavBar.css"

export const NavBar = () => {

  return (
    <nav>
      <div>
        <img src={logo} alt="Logo" className="project-logo" />
      </div>

      <div id='nav-links'>
            <NavLink className="nav-link" to='/'>Home</NavLink>
            <NavLink className="nav-link" to='/about'>About</NavLink>
            <NavLink className="nav-link" to='/contact'>Contact</NavLink>
            <NavLink className="nav-link" to='/register'>Register</NavLink>
      </div>
    </nav>
  )
}
