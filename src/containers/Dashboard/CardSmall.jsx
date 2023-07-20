import React from "react";

const SmallCard = (props) => {
  return (
    <>
      <div className="col-sm-6 col-xl-3">
        <div className="bg-light-custom rounded d-flex align-items-center justify-content-between p-4">
          <i className={props.iconClass}></i>
          <div className="ms-3">
            <p className="mb-2 fs-5">{props.cardTitle}</p>
            <h6 className="mb-0 text-center">{props.number}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallCard;
