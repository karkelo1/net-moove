import React from 'react';
import '../CSS/Homepage.css'; // Ensure this path is correct
import coverImage from '../images/cover.png';
import girl from '../images/girl.png'; // Ensure this path is correct


const HomePage = () => {
  return (
    <div className="container homepage">
      {/* Banner Section */}
      <div className="row align-items-center mb-4">
        <div className="col-12 col-lg-6">
          <h1 className="custom-heading">Lass deine Vision ins Leben bringen!</h1>
          <div className="justify-content-center justify-content-lg-start mb-5">
            <button className="btn btn-main btn-lg btn-sm">Angebot Einholen</button>
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
          <img src={coverImage} alt="Cover" className="cover-image img-fluid" />
        </div>
      </div>

      {/* Service Section */}
      <div className="row services-grid border-dark">
        <div className="col-lg-8">
          <div className="row gx-0">
            <div className="col-12 col-md-6">
              <div className="card service-card bg-service1 m-2 sm">
                <h2>Webseite</h2>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card service-card bg-service2 m-2">
                <h2>Social Media</h2>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card service-card bg-service3 m-2">
                <h2>3D Design</h2>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card service-card bg-service4 m-2">
                <h2>Software</h2>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card service-card bg-service5 m-2">
                <h2>Graphic Design</h2>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card service-card bg-service6 m-2">
                <h2>Ads</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center sm-s">
          <img src={girl} alt="Bild" className="img-fluid" />
        </div>
      </div>

      {/* Why Us Section */}
      <div className="why-us-section">
        <h2 className="why-us-heading">WARUM WIR?</h2>
        <div className="row">
          <div className="col-12  col-md-4 mb-3">
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
