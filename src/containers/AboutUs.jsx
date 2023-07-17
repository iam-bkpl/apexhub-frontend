import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/testImages/about-1.jpg"
const AboutUs = () => {
  return (
    <>
      <section id="about" className="py-5">
        <div className="container">
          <div className="title text-center pt-3 pb-5">
            <h2 className="position-relative d-inline-block ms-4">About Us</h2>
          </div>
          <div className="container-xxl ">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                  <div className="row g-0 about-bg rounded overflow-hidden">
                    <div className="col-6 text-start">
                      <img className="img-fluid w-100" src=""/>
                    </div>
                    <div className="col-6 text-start">
                      <img className="img-fluid" src={img1} style={{width: "100%", height: "80%"}}/>
                    </div>
                    <div className="col-6 text-end">
                      <img className="img-fluid" src="" style={{width: "85%"}}/>
                    </div>
                    <div className="col-6 text-end">
                      <img className="img-fluid w-100" src=""/>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                  <h1 className="mb-4">We Help To Get The Best Job And Find A Talent</h1>
                  <p className="mb-4 justify">We offers both e-commerce and a comprehensive job
                    portal experience. We provide a secure and user-friendly environment for online
                    shopping,
                    where buyers and sellers can connect and transact with ease. Additionally, our unique
                    ACS
                    department ensures that job postings are verified, and students have access to exclusive
                    job opportunities.</p>
                  <p><i className="fa fa-check text-primary me-3"></i>Exclusive Student Placements</p>
                  <p><i className="fa fa-check text-primary me-3"></i>Seamless Consumer-to-Consumer Payments</p>
                  <p><i className="fa fa-check text-primary me-3"></i>Verified Job Opportunities</p>
                  <Link className="btn btn-primary py-3 px-5 mt-3" to="/about">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
