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
          <div className="row gx-0 "> {/* Add spacing between rows */}
            <div className="col-12 col-md-6">
              <div className="card service-card bg-service1 m-2 sm ">
                <h2>Webseite</h2>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card service-card bg-service2 m-2 ">
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
        <div className="col-lg-4 d-flex justify-content-center align-items-center sm-s ">
          <img src={girl} alt="Bild" className="img-fluid " /> {/* Replace with actual image path */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
