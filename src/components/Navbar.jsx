// src/components/Navigationbar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/work.svg';  

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Skill</a></li>
        <li><a href="#projects">Project</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
};

export default Navbar;