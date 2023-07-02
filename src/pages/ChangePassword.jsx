import React from "react";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your change password logic here
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-5 right-box shadow rounded-5 bg-light">
        <div className="row align-items-center">
          <form onSubmit={handleSubmit}>
            <div className="header-text mb-4 text-center">
              <h2>Change Password</h2>
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control form-control-lg bg-white rounded-pill shadow-sm fs-6"
                placeholder="New Password"
                required
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control form-control-lg bg-white rounded-pill shadow-sm fs-6"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="input-group my-3">
              <Link
                className="btn btn-lg btn-primary w-100 fs-6"
                to="/login"
                type="submit"
              >
                Submit
              </Link>
            </div>
            <div className="row">
              <small>
                Didn't get verification link? <Link to="/"> Resend link</Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
