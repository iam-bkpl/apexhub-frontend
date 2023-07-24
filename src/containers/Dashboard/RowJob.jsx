import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobPost, updateJob } from "../../redux/actions/acs";

const RowJob = (props) => {
  const {
    id,
    title,
    company,
    date,
    description,
    location,
    application_count,
    status,
  } = props;

  const [isChecked, setIsChecked] = useState(status);
  const [jobStatus, setJobStatus] = useState("");
  const [isBadgeSuccess, setIsBadgeSuccess] = useState(false);
  const [modalId, setModalId] = useState("");

  const dispatch = useDispatch();
  const jobPost = useSelector((state) => state.acs.jobPost);

  useEffect(() => {
    // Fetch the job post when the component mounts or whenever the id changes
    dispatch(fetchJobPost(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (jobPost) {
      // Update the local state when the job post data is fetched or updated
      setIsChecked(jobPost.status);
      setJobStatus(jobPost.status ? "Active" : "Inactive");
      setIsBadgeSuccess(jobPost.status);
    }
  }, [jobPost]);

  useEffect(() => {
    // Set the initial state when the component mounts or whenever the status changes
    setIsChecked(status);
  }, [status]);

  useEffect(() => {
    // Update the modalId when the id changes
    setModalId(`exampleModal-${id}`);
  }, [id]);

  const toggleJobStatus = () => {
    // Toggle the local state
    setIsChecked((prevStatus) => !prevStatus);
  };

  useEffect(() => {
    // Update the jobStatus based on the isChecked state
    setJobStatus(isChecked ? "Inactive" : "Active");

    // Update the badgeClass based on the isChecked state
    setIsBadgeSuccess(isChecked);
  }, [isChecked]);

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
        {/* ... (rest of your modal JSX) */}
      </div>
    </>
  );
};

export default RowJob;
