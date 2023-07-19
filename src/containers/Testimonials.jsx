import React from "react";

const Testimonials = () => {
  return (
      <>
         <section className="team section-bg">
        <div className="title text-center pt-3 pb-5">
            <h2 className="position-relative d-inline-block ms-4">Our Client Says</h2>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators ">
                <button  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-secondary"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2" className="bg-secondary"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3" className="bg-secondary"></button>
            </div>
            <div className="carousel-inner w-auto px-5 ms-5">
                <div className="carousel-item active" data-bs-interval="5000">
                    <div className="row mb-5">
                        <div className="col-lg-3 col-sm-6 col-md-5 d-flex align-items-stretch mb-2">
                            <div className="member">
                                <div className="member-img">
                                    <img src="./images/about-1.jpg" className="img-fluid" alt=""/>
                                </div>
                                <div className="member-info px-3 my-4  text-center">
                                    <h4>Client 4</h4>
                                    <small className="text-secondary">One aspect that sets APEX-HUB apart from others is the exceptional customer support. </small>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-5 d-flex align-items-stretch mb-2">
                            <div className="member">
                                <div className="member-img">
                                    <img src="./images/about-3.jpg" className="img-fluid" alt=""/>
                                </div>
                                <div className="member-info px-3 my-4 text-center">
                                    <h4>Client 3</h4>
                                    <span className="text-secondary">Description </span>
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
                                    <img src="./images/about-4.jpg" className="img-fluid" alt=""/>
                                </div>
                                <div className="member-info px-3 my-4 text-center">
                                    <h4>Client 2</h4>
                                    <span className="text-secondary">Description</span>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-lg-3 col-sm-6 col-md-5 d-flex align-items-stretch mb-2 ">
                            <div className="member">
                                <div className="member-img">
                                    <img src="./images/about-4.jpg" className="img-fluid" alt=""/>
                                </div>
                                <div className="member-info px-3 my-4 text-center">
                                    <h4>Client 2</h4>
                                    <span className="text-secondary">Description that sets APEX-HUB apart from others is the exceptional customer support.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </>
    )
};

export default Testimonials;
