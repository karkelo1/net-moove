// src/Footer.js
import React from 'react';
import '../CSS/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-bg text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center mb-3 mb-md-0">
            <h4>Kontaktiere uns</h4>
          </div>
          <div className="justify-content-center justify-content-lg-start mb-5">
            <Link to="/angebot-form" className="btn btn-main btn-lg btn-sm">Angebot Einholen</Link>
          </div>
          <div className="col-md-6 text-md-right text-center">
            <p className="mb-2">Email: example@example.com</p>
            <p className="mb-0">Phone: +123 456 7890</p>
            <div className="social-icons mt-3">
              <a href="https://facebook.com" className="text-white">
                <FontAwesomeIcon icon={faFacebook} size="1x" />
              </a>
              <a href="https://twitter.com" className="text-white ml-3">
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </a>
              <a href="https://instagram.com" className="text-white ml-3">
                <FontAwesomeIcon icon={faInstagram} size="1x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
