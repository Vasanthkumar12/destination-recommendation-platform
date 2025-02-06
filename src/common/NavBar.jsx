import React from 'react'
import { NavLink } from "react-router-dom";
import logo from "../assets/Destinova.png";
import "../styles/NavBar.css"
import {useState} from 'react'

export const NavBar = () => {
  const [display, setDisplay] = useState('false')
  const showMenu = () => {
    setDisplay(!display)
    let nav = document.getElementById('nav').style.paddingBottom = display? '0px' : '10px'
    let res = document.getElementsById('nav-links')
    for(let i=0; i<res.length; i++) {
        res[i].style.display = display? 'flex' : 'none'
    }
  }

  return (
    <nav>
      <div>
        <img src={logo} alt="Logo" className="project-logo" />
      </div>
      <div onClick={showMenu} id='menu_bar'>
        <div>
            <div className='menu'></div>
            <div className='menu'></div>
            <div className='menu'></div>
        </div>
        <div>
            <span>MENU</span>
        </div>
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
