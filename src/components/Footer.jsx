import React from 'react';
import '../CSS/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import contact from '../images/contact.jpg';

const Footer = () => {
  return (
    <footer className="footer-bg text-white py-5">
      <div className="container">
        <div className="row">
          {/* Image Column */}
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end mb-4 mb-md-0">
            <img src={contact} alt="ContactImage" className="footer-image img-fluid" />
          </div>

          {/* Texts Column */}
          <div className="col-md-6 d-flex flex-column align-items-center align-items-md-start">
            <div className="text-center text-md-start mb-4">
              <h4>Kontaktiere uns</h4>
              <Link to="/angebot-form" className="btn btn-main btn-lg btn-sm mt-3">Angebot Einholen</Link>
            </div>
            <div className="text-center text-md-start mb-3 mb-md-4">
              <p className="mb-2">Email: example@example.com</p>
              <p className="mb-0">Phone: +123 456 7890</p>
            </div>
            <div className="social-icons mt-3 d-flex justify-content-center justify-content-md-start">
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
