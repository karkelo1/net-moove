import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../CSS/NavBar.css'; // Adjust path as needed

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    // Adding mousedown event listener to the whole document
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup: remove the event listener when component unmounts
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <nav className="navbar navbar-expand-lg navbar-dark gradient-bg">
      <div className="container" ref={navRef}>
        {/* Navbar Brand */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" height="30" className="invert" />
        </Link>
        
        {/* Navbar Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        
        {/* Navbar Collapse */}
        <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Navbar Links */}
            <li className="nav-item">
              <Link className="nav-link  text-white " to="/" onClick={() => setIsExpanded(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about" onClick={() => setIsExpanded(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/services" onClick={() => setIsExpanded(false)}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact" onClick={() => setIsExpanded(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
