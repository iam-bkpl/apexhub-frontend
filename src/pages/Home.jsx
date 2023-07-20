import React from "react";
import { Link } from "react-router-dom";
import carouselImg1 from "../assets/banner-img-1.jpg";
import carouselImg2 from "../assets/banner-img-2.jpg";
import HotSales from "../containers/HotSales";
import TopJobs from "../containers/TopJobs";
import AboutUs from "../containers/AboutUs";
import Services from "../containers/Services";
import Testimonials from "../containers/Testimonials";

const Home = () => {
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
                  src={carouselImg1}
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
                <img src={carouselImg2}></img>
              </div>
              <div className="top-0 position-absolute start-0 w-100 h-100 d-flex align-items-center">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-10 col-lg-8">
                      <h2 className="text-white text-capitalize">
                        Best price & offer
                      </h2>
                      <h1 className="py-2 mb-5 text-white text-uppercase fw-bold">
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

      <HotSales />
      <TopJobs />
      <AboutUs />
      <Services />
      <Testimonials />
    </>
  );
};

export default Home;
