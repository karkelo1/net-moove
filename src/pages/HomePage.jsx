import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Homepage.css'; // Ensure this path is correct
import coverImage from '../images/cover.png';
import usImage from '../images/us.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Example solid arrow icon


const HomePage = () => {
  return (
    <div className="container homepage">
      {/* Banner Section */}
      <div className="row align-items-center mb-4 banner">
        <div className="col-12 col-lg-6">
          <h1 className="custom-heading">Kreative <span className='meisterwerk'> Meisterwerke </span><br /> Entfalte dein Potenzial!</h1>
          <p className="heading">"Chancen passieren nicht. Du schaffst sie." — <br /><span className='bold'>Chris Grosser</span></p>
          <div className="justify-content-center justify-content-lg-start mb-5">
            <Link to="/angebot-form" className="btn btn-main btn-lg btn-sm">Angebot Einholen</Link>
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
          <img src={coverImage} alt="Cover" className="cover-image img-fluid" />
        </div>
      </div>

      {/* Service and All-in-One Section */}
      <div className="row services-and-all-in-one">
        {/* All-in-One Section */}
        <div className="col-lg-4 all-in-one-section">
          <h3>All in one for your business</h3>
          <p>We provide comprehensive services to meet all your business needs, ensuring you have everything you need for success under one roof.</p>
        </div>
        <div className="col-lg-8">
          <div className="row gx-0">
            <div className="col-12 col-md-6">
              <div className="card service-card bg-service1 m-2 sm">
                <h2>Webseite</h2>
                <FontAwesomeIcon icon={faArrowRight} className="neon-green-arrow" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card service-card bg-service2 m-2">
                <h2>Social Media</h2>
                <FontAwesomeIcon icon={faArrowRight} className="neon-green-arrow" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card service-card bg-service3 m-2">
                <h2>3D Design</h2>
                <FontAwesomeIcon icon={faArrowRight} className="neon-green-arrow" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card service-card bg-service4 m-2">
                <h2>Software</h2>
                <FontAwesomeIcon icon={faArrowRight} className="neon-green-arrow" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card service-card bg-service5 m-2">
                <h2>Graphic Design</h2>
                <FontAwesomeIcon icon={faArrowRight} className="neon-green-arrow" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card service-card bg-service6 m-2">
                <h2>Ads</h2>
                <FontAwesomeIcon icon={faArrowRight} className="neon-green-arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="row additional-section align-items-center">
        <div className="col-lg-6">
          <h3>Meet the Founders</h3>
          <h4>HIER UM DEIN PROBLEM ZU LOSEN</h4>
          <p>Wir machen, was für dich funktioniert! Das Net Moove Team analysiert dein Business und liefert dir die einzigartigste Lösung, die perfekt zu dir passt.</p>
        </div>
        <div className="col-lg-6">
          <img src={usImage} alt="US" className="us-image img-fluid" />
        </div>
      </div>

      {/* Why Us Section */}
      <div className="why-us-section">
        <h2 className="why-us-heading">WARUM WIR?</h2>
        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <div className="card reason-card reason-bg1">
              <h3>QUALITÄT</h3>
              <p>Wir bieten hochwertige Dienstleistungen, die Ihre Erwartungen übertreffen werden.</p>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="card reason-card reason-bg2">
              <h3>ERFAHRUNG</h3>
              <p>Unser Team besteht aus erfahrenen Fachleuten, die wissen, wie man Projekte erfolgreich umsetzt.</p>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="card reason-card reason-bg3">
              <h3>KUNDENSERVICE</h3>
              <p>Wir legen großen Wert auf exzellenten Kundenservice und stehen Ihnen jederzeit zur Verfügung.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
