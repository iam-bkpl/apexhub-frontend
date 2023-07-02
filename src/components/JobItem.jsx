import React from "react";

const JobItem = (props) => {
  const { company_logo, title, location, job_type, salary, expire_date } =
    props;
  return (
    <div className="container container-fluid">
      <div className="job-item p-4 mb-4">
        <div className="row g-4">
          <div className="col-12 col-md-8 d-flex align-items-center">
            <img
              className="flex-shrink-0 img-fluid border rounded"
              src={company_logo}
              alt=""
              style={{ width: "80px", height: "80px" }}
            />
            <div className="text-start ps-4">
              <h5 className="mb-3">{title}</h5>
              <span className="text-truncate me-3">
                <i className="fa fa-map-marker-alt text-primary me-2"></i>
                {location}
              </span>
              <span className="text-truncate me-3">
                <i className="far fa-clock text-primary me-2"></i>
                {job_type}
              </span>
              <span className="text-truncate me-0">
                <i className="far fa-money-bill-alt text-primary me-2"></i>
                {salary}
              </span>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
            <div className="d-flex flex-wrap justify-content-between mb-3">
              <a
                className="btn btn-light btn-square mb-2 mb-md-0 me-md-2"
                href=""
              >
                <i className="far fa-heart text-secondary"></i>
              </a>
              <a className="btn btn-primary" href="">
                Apply Now
              </a>
            </div>
            <small className="text-truncate">
              <i className="far fa-calendar-alt text-primary me-2"></i>Date
              Line: {expire_date}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
