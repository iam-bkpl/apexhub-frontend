import React from "react";

const JobItem = (props) => {
  const {
    id,
    logo,
    title,
    location,
    job_type,
    salary,
    vote_count,
    expire_date,
    applyNow,
    experience_level,
    vote,
  } = props;

  const checkVoteCount = (vote_count) => {
    if (vote_count) {
      return <span>{vote_count} </span>;
    } else {
      return <span>-</span>;
    }
  };
  return (
    <>
      <div className="container container-fluid">
        <div className="p-4 mb-4 job-item">
          <div className="row g-4">
            <div className="col-12 col-md-8 d-flex align-items-center">
              <img
                className="flex-shrink-0 border rounded img-fluid"
                src={logo}
                alt=""
                style={{ width: "80px", height: "80px" }}
              />
              <div className="text-start ps-4">
                <pre className="h5">{title}</pre>

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
              <div className="flex-wrap mb-3 d-flex justify-content-between">
                <button
                  className="mb-2 btn btn-light btn-square mb-md-0 me-md-2"
                  onClick={() => vote()}
                >
                  <span className="d-flex flex-column">
                    <i className="fa fa-caret-up" aria-hidden="true"></i>
                    <span>{checkVoteCount(vote_count)}</span>
                  </span>
                </button>
                <button className="btn btn-primary" onClick={applyNow}>
                  Apply Now
                </button>
              </div>
              <small className="text-truncate">
                <i className="far fa-calendar-alt text-primary me-2"></i>Date
                Line: {expire_date}
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobItem;
