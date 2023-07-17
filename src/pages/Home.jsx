import React from "react";
import { Link } from "react-router-dom";
import carouselImg1 from "../assets/banner-img-1.jpg"
import carouselImg2 from "../assets/banner-img-2.jpg"
import HotSales from "../containers/HotSales";
import TopJobs from "../containers/TopJobs";
import AboutUs from "../containers/AboutUs";
import Services from "../containers/Services";
import Testimonials from "../containers/Testimonials";

const Home = () => {
  return (
    <>
      <header id="header" className="vh-90 carousel slide" data-bs-ride="carousel">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <div className="carousel-image" style={{backgroundSize: 'cover'}}>
                {/* carousel image  */}
                <img src={carouselImg1} style={{backgroundSize: 'cover'}}></img>
              </div>
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-10 col-lg-8">
                      <h1 className=" py-2 fw-bold text-dark">Find The Best Jobs <br /> That Fit You</h1>
                      <p className="text-capitalize text-dark px-3">ApexHub is not just a job portal, but a
                        gateway to future
                        success.</p><br />
                      <Link to="/job-list"
                        className=" py-3 px-5 rounded-pill text-uppercase text-decoration-none main-btn fs-5 text-white">Find
                        Job
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <div className="carousel-image1" style={{backgroundSize: 'cover'}}>
                {/* carousel image1  */}
                <img src={carouselImg2}></img>
              </div>
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-10 col-lg-8">
                      <h2 className="text-capitalize text-white">Best  price & offer</h2>
                      <h1 className="text-uppercase py-2 fw-bold text-white mb-5">new season</h1>
                      <Link to="/job-list" className=" py-3 px-5 rounded-pill text-uppercase text-decoration-none main-btn fs-5 text-white">buy
                        now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <HotSales/>
      <TopJobs/>
      <AboutUs/>
      <Services/>
      <Testimonials/>

    </>
  );
};

export default Home;
