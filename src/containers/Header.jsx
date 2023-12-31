import React from 'react'
import { Link } from 'react-router-dom';
import carouselImg1 from "../assets/backgrounds/bg2.jpg";
import carouselImg2 from "../assets/backgrounds/bg1.jpg";
const Header = (props) => {
  const{img1, img2 }=props;
  return (
    <>
      <header
        id="header"
        className="vh-90 carousel slide"
        data-bs-ride="carousel"
      >
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <div
                className="carousel-image"
                style={{ backgroundSize: "cover" }}
              >
                {/* carousel image  */}
                <img
                  src={img1}
                  style={{ backgroundSize: "cover" }}
                ></img>
              </div>
              <div className="top-0 position-absolute start-0 w-100 h-100 d-flex align-items-center">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-10 col-lg-8">
                      <h1 className="py-2 fw-bold text-dark">
                        Find The Best Jobs <br /> That Fit You
                      </h1>
                      <p className="px-3 text-capitalize text-dark">
                        ApexHub is not just a job portal, but a gateway to
                        future success.
                      </p>
                      <br />
                      <Link
                        to="/job-list"
                        className="px-5 py-3 text-white rounded-pill text-uppercase text-decoration-none main-btn fs-5"
                      >
                        Find Job
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <div
                className="carousel-image1"
                style={{ backgroundSize: "cover" }}
              >
                {/* carousel image1  */}
                <img src={img2}></img>
              </div>
              <div className="top-0 position-absolute start-0 w-100 h-100 d-flex align-items-center">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-10 col-lg-8">
                      <h2 className="text-white text-capitalize">
                        Best price & offer
                      </h2>
                      <h1 className="py-2 mb-5 text-dark text-uppercase fw-bold">
                        new season
                      </h1>
                      <Link
                        to="/job-list"
                        className="px-5 py-3 text-white rounded-pill text-uppercase text-decoration-none main-btn fs-5"
                      >
                        buy now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header