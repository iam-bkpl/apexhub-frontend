import React, { useState, useEffect } from "react";


const RowJob = (props) => {
  const { id, title, company, date, description, status, location } = props;

  useEffect(() => {
    if (status === true) {
      setJobStatus("Active");
    } else {
      setJobStatus("Inactive");
    }
  }, [status]);

  const [isChecked, setIsChecked] = useState(false);
  const [jobStatus, setJobStatus] = useState("");
  const [isBadgeDanger, setIsBadgeDanger] = useState(false);
  const [modalId, setModalId] = useState("");
  

  const toggleJobStatus = () => {
    setIsChecked((prevValue) => !prevValue);
    setJobStatus((prevStatus) => (prevStatus === "Active" ? "Inactive" : "Active"));
    setIsBadgeDanger((prevValue) => !prevValue);
  };

  useEffect(() => {
    setModalId(`exampleModal-${id}`);
  }, [id]);

  const badgeClass = isBadgeDanger ? "badge btn-success rounded-pill " : "badge btn-danger rounded-pill";

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{company}</td>
        <td>{title}</td>
        <td>{date}</td>
        <td>7</td>
        <td><span className={badgeClass}>{jobStatus}</span></td>
        <td className='m-0 p-0 '>
          <div className="form-check form-switch mx-2 fs-5 ">
            <input className="form-check-input shadow-none"
              type="checkbox"
              role="switch"
              checked={isChecked}
              onChange={toggleJobStatus}
            />
          </div>
        </td>
        <td>
          <button className="btn bg-white text-dark border-2 shadow-none rounded-pill py-0 ms-0" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
            View
          </button>
        </td>
      </tr>
      {/* <!-- Modal --> */}
      <div className="modal fade" id={modalId} aria-labelledby={`${modalId}-label`} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content w-75">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex justify-content-center">
              <div class="card text-center border-white" style={{ width: "21rem" }}>
                <img src={location} class="card-img-top" height="350px" alt="Image" />
                <div class="card-body">
                  <h5 class="card-title">{company}</h5>
                  <p class="card-text" dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <span className="fw-bold">Name : &nbsp;</span> {company}
                  </li>
                  <li class="list-group-item">
                    <span className="fw-bold">Price : &nbsp;</span>
                    {title}
                  </li>
                  <li class="list-group-item">
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
