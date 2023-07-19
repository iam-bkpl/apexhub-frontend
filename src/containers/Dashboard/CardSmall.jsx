import React from "react";

const SmallCard = () => {
  return (
    <>
      <div className="col-sm-6 col-xl-3">
        <div className="bg-light-custom rounded d-flex align-items-center justify-content-between p-4">
          <i className="fa fa-users fa-3x text-primary"></i>
          <div className="ms-3">
            <p className="mb-2">Total Users</p>
            <h6 className="mb-0">5000</h6>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-3">
        <div className="bg-light-custom rounded d-flex align-items-center justify-content-between p-4">
          <i className="fa fa-chart-pie fa-3x text-primary"></i>
          <div className="ms-3">
            <p className="mb-2">Active Users</p>
            <h6 className="mb-0">234</h6>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-3">
        <div className="bg-light-custom rounded d-flex align-items-center justify-content-between p-4">
          <i className="fa fa-chart-bar fa-3x text-primary"></i>
          <div className="ms-3">
            <p className="mb-2">Total Jobs</p>
            <h6 className="mb-0">500</h6>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-3">
        <div className="bg-light-custom rounded d-flex align-items-center justify-content-between p-4">
          <i className="fa fa-chart-area fa-3x text-primary"></i>
          <div className="ms-3">
            <p className="mb-2">Total Products</p>
            <h6 className="mb-0">1500</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallCard;
