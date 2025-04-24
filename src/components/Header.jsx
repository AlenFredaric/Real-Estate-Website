import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/Logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <h1 className="logo">
          <img src={logo} alt="LogoImg" />
        </h1>
        <button className="hamburger" onClick={toggleMenu} aria-expanded={isOpen} aria-controls="navbarNav">
          <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}></div>
        </button>
        <nav id="navbarNav">
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><a href="#hero" onClick={() => setIsOpen(false)}>ABOUT</a></li>
            <li><a href="#features" onClick={() => setIsOpen(false)}>FEATURES</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)}>SERVICES</a></li>
            <li><a href="#gallery" onClick={() => setIsOpen(false)}>GALLERY</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;