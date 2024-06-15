import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../CSS/NavBar.css'; // Import custom styles
import { BsList } from 'react-icons/bs';

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
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark gradient-bg" ref={navRef}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" height="30" className="invert" />
        </Link>
        <button
          className={`navbar-toggler ${isExpanded ? '' : 'collapsed'}`}
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
        >
          <BsList size={22} />
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${isExpanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/" onClick={() => setIsExpanded(false)}>Home</Link>
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
