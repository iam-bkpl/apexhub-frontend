import React from "react";
import iambkpl from "../assets/defaults/iambkpl.jpg";
import roshan from "../assets/defaults/img35.png"
import sabita from "../assets/defaults/sabita.jpg"
import bhawana from "../assets/defaults/bhawana.jpg"


const Testimonials = () => {
  return (
    <>
      <section className="team section-bg">
        <div className="title text-center pt-3 pb-5">
          <h2 className="position-relative d-inline-block ms-4">
            What We Learned ?
          </h2>
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active bg-secondary"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="bg-secondary"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className="bg-secondary"
            ></button>
          </div>
          <div className="carousel-inner w-auto px-5 ms-5">
            <div className="carousel-item active" data-bs-interval="5000">
              <div className="row mb-5">
                <div className="col-lg-3 col-sm-6 col-md-5 d-flex align-items-stretch mb-2">
                  <div className="member">
                    <div className="member-img">
                      <img
                        src={roshan}
                        className="img-fluid rounded-pill"
                        alt=""
                      />
                    </div>
                    <div className="member-info px-3 my-4  text-center">
                      <h4>Roshan Nyaupane</h4>
                      <small className="text-secondary ">
                      During our group project, I learned valuable skills in front-end development with React. I gained expertise in creating interactive user interfaces, managing state etc.
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-5 d-flex align-items-stretch mb-2">
                  <div className="member">
                    <div className="member-img">
                      <img
                        src={bhawana}
                        className="img-fluid rounded-pill"
                        alt=""
                      />
                    </div>
                    <div className="member-info px-3 my-4 text-center">
                      <h4>Bhawana Shrestha</h4>
                      <small className="text-secondary">In our group project, I learned that MySQL database design is crucial for efficient data storage and retrieval. Understanding normalization, indexing, and relational modeling etc. </small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-5 d-flex align-items-stretch mb-2 ">
                  <div className="member">
                    <div className="member-img">
                      <img
                        src={iambkpl}
                        className="img-fluid rounded-pill"
                        alt=""
                      />
                    </div>
                    <div className="member-info px-3 my-4 text-center">
                      <h4>Kapil Bhandari</h4>
                      <small className="text-secondary">During our group project, working on the backend with Django Rest API, I learned to design robust APIs, handle data serialization, and implement authentication and permissions.</small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-5 d-flex align-items-stretch mb-2 ">
                  <div className="member">
                    <div className="member-img">
                      <img
                        src={sabita}
                        className="img-fluid rounded-pill"
                        alt=""
                      />
                    </div>
                    <div className="member-info px-3 my-4 text-center">
                      <h4>Sabita Shrestha</h4>
                      <small className="text-secondary">
                      I learned the importance of collaboration and effective communication. Figma's real-time editing capabilities enabled seamless teamwork, streamlining the design process
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <div className="row mb-5">
              <div className="col-lg-3 col-sm-6 col-md-5 d-flex align-items-stretch mb-2 ">
                  <div className="member">
                    <div className="member-img">
                      <img
                        src={iambkpl}
                        className="img-fluid rounded-pill"
                        alt=""
                      />
                    </div>
                    <div className="member-info px-3 my-4 text-center">
                      <h4>Kapil Bhandari</h4>
                      <small className="text-secondary">During our group project, working on the backend with Django Rest API, I learned to design robust APIs, handle data serialization, and implement authentication and permissions.</small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-5 d-flex align-items-stretch mb-2 ">
                  <div className="member">
                    <div className="member-img">
                      <img
                        src={sabita}
                        className="img-fluid rounded-pill"
                        alt=""
                      />
                    </div>
                    <div className="member-info px-3 my-4 text-center">
                      <h4>Sabita Shrestha</h4>
                      <small className="text-secondary">
                      I learned the importance of collaboration and effective communication. Figma's real-time editing capabilities enabled seamless teamwork, streamlining the design process
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
