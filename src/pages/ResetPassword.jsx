import React from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your password reset logic here
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-5 bg-light right-box shadow rounded-5">
        <div className="row align-items-center">
          <form onSubmit={handleSubmit}>
            <div className="header-text mb-4">
              <h2>Reset Password</h2>
              <p>Enter your email to reset your password</p>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg bg-white rounded-pill shadow-sm fs-6"
                placeholder="Email address"
                required
              />
            </div>
            <div className="input-group mb-3 mt-3">
              <Link
                className="btn btn-lg btn-primary w-100 fs-6"
                to="/change-password"
              >
                Send Reset Link
              </Link>
            </div>
            <div className="row">
              <small>
                Remember Password? <Link to="/login">Login</Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
