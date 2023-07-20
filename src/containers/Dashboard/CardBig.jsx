import React from "react";

const CardBig = (props) => {
  return (
    <>
      <div className="col-sm-6 col-xl-4">
        <div className="bg-light-custom rounded d-flex align-items-center justify-content-between p-4 ">
          <i className={props.iconClass}></i>
          <div className="ms-0">
            <p className="mb-2 fs-4">{props.cardTitle}</p>
            <h6 className="mb-0 text-center fs-4"> {props.number}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBig;
