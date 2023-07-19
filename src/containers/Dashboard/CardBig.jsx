import React from "react";

const CardBig = (props) => {
  return (
    <>
      <div className="col-sm-6 col-xl-4">
        <div className="bg-light-custom rounded d-flex align-items-center justify-content-between p-4 ">
          <i className="fa fa-users fa-4x text-primary"></i>
          <div className="ms-0">
            <p className="mb-2 fs-5">{props.cardTitle}</p>
            <h6 className="mb-0  fs-4"> {props.number}</h6>
          </div>
        </div>
      </div>
      {/* <div className="col-sm-6 col-xl-4">
        <div className="bg-light-custom rounded d-flex align-items-center justify-content-between p-4 ">
          <i className="fa fa-user-plus fa-4x text-primary"></i>
          <div className="ms-0">
            <p className="mb-2 fs-5">Active Users</p>
            <h6 className="mb-0  fs-4"> 389</h6>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-4">
        <div className="bg-light-custom rounded d-flex align-items-center justify-content-between p-4 ">
          <i className="fa fa-user-lock fa-4x text-primary"></i>
          <div className="ms-0">
            <p className="mb-2 fs-5">Blocked Users</p>
            <h6 className="mb-0  fs-4">669</h6>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CardBig;
