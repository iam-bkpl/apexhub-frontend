import React from "react";
import { Link } from "react-router-dom";

const TopJobs = () => {
  return (
    <>
      <section id="special" className="py-5">
        <div className="container">
            <div className="title text-center py-5">
                <h2 className="position-relative d-inline-block">Top Jobs</h2>
            </div>

            <div className="special-list row g-0">
                <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                        <div className="job-item p-4 mb-4">
                            <div className="row g-4">
                                <div className="col-sm-12 col-md-8 d-flex align-items-center ">
                                    <img className="flex-shrink-0 img-fluid border rounded" src=""
                                        alt="" style={{width: "80px",height: "80px"}}/>
                                    <div className="text-start ps-4">
                                        <h5 className="mb-3">Software Engineer</h5>
                                        <span className="text-truncate me-3"><i
                                                className="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                        <span className="text-truncate me-3"><i
                                                className="far fa-clock text-primary me-2"></i>Full Time</span>
                                        <span className="text-truncate me-0"><i
                                                className="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                    </div>
                                </div>
                                <div
                                    className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                    <div className="d-flex mb-3">
                                        <a className="btn btn-light btn-square me-3" href=""><i
                                                className="far fa-heart text-secondary"></i></a>
                                        <a className="btn btn-primary" href="">Apply Now</a>
                                    </div>
                                    <small className="text-truncate"><i
                                            className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan,
                                        2045</small>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <Link className="rounded-pill text-white text-decoration-none  py-3 px-5 main-btn" to="/job-list">Browse
                                More Jobs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default TopJobs;
