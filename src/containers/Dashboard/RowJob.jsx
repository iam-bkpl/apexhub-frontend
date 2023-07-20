import React, { useState, useEffect } from "react";

const RowJob = (props) => {
  const {
    id,
    title,
    company,
    date,
    description,
    status,
    location,
    application_count,
  } = props;

  const [isChecked, setIsChecked] = useState(status);
  const [jobStatus, setJobStatus] = useState("");
  const [isBadgeSuccess, setIsBadgeSuccess] = useState(false);
  const [modalId, setModalId] = useState("");

  useEffect(() => {
    if (status) {
      setJobStatus("Active");
      setIsBadgeSuccess(true);
    } else {
      setJobStatus("Inactive");
      setIsBadgeSuccess(false);
    }
  }, [status]);

  const toggleJobStatus = () => {
    setIsChecked((prevValue) => !prevValue);
    setJobStatus((prevStatus) =>
      prevStatus === "Active" ? "Inactive" : "Active"
    );
    setIsBadgeSuccess((prevValue) => !prevValue);
  };

  useEffect(() => {
    setModalId(`exampleModal-${id}`);
  }, [id]);

  const badgeClass = isBadgeSuccess
    ? "badge btn-success rounded-pill"
    : "badge btn-danger rounded-pill";

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prevValue) => !prevValue);
  };

  const getDescriptionText = () => {
    if (isExpanded) {
      return description;
    } else {
      const words = description.split(" ");
      if (words.length > 50) {
        const shortenedDescription = words.slice(0, 50).join(" ");
        return `${shortenedDescription}...`;
      } else {
        return description;
      }
    }
  };

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{company}</td>
        <td>{title}</td>
        <td>{date}</td>
        <td className="text-center">{application_count}</td>
        <td>
          <span className={badgeClass}>{jobStatus}</span>
        </td>
        <td className="m-0 p-0">
          <div className="form-check form-switch mx-2 fs-5">
            <input
              className="form-check-input shadow-none"
              type="checkbox"
              role="switch"
              checked={isChecked}
              onChange={toggleJobStatus}
            />
          </div>
        </td>
        <td>
          <button
            className="btn bg-white text-dark border-2 shadow-none rounded-pill py-0 ms-0"
            data-bs-toggle="modal"
            data-bs-target={`#${modalId}`}
          >
            View
          </button>
        </td>
      </tr>
      {/* Modal */}
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id={modalId}
        aria-labelledby={`${modalId}-label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content w-100">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex justify-content-center">
              <div
                className="card text-center border-white"
                style={{ width: "21rem" }}
              >
                {/* <img src={location} className="card-img-top" height="350px" alt="Image" /> */}
                <div className="card-body">
                  <h3 className="card-title text-capitalize">{company}</h3>
                  <p className="card-text">{getDescriptionText()}</p>
                  {description.length > 50 && (
                    <button
                      className="btn btn-white bg-white text-primary text-decoration-underline shadow-none border-white"
                      onClick={toggleExpand}
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}
                </div>
                <ul className="list-group list-group-flush text-start">
                  <li className="list-group-item text-capitalize">
                    <span className="fw-bold ">Name : &nbsp;</span> {company}
                  </li>
                  <li className="list-group-item text-capitalize">
                    <span className="fw-bold">Job Title : &nbsp;</span>
                    {title}
                  </li>
                  <li className="list-group-item text-capitalize">
                    <span className="fw-bold">Location : &nbsp;</span>{" "}
                    {location}
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold">Date: &nbsp;</span>
                    {date}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RowJob;
