import React from "react";
const ContactInfo = ({ icon, title, info }) => {
  return (
    <div className="bg-light d-flex align-items-center w-100 p-4 mb-3 rounded-5">
      <div
        className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark rounded-pill"
        style={{ width: "55px", height: "55px" }}
      >
        <i className={icon}></i>
      </div>
      <div className="ms-4">
        <p className="mb-2">{title}</p>
        <h3 className="mb-0">{info}</h3>
      </div>
    </div>
  );
};
export default ContactInfo;
