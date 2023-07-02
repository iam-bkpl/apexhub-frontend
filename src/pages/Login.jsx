import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginImg from "../assets/LoginImg.png";
import { MyContext } from "../MyContext";

const Login = () => {
  const { user } = useContext(MyContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-light shadow box-area">
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box d-none d-md-block">
          <div className="featured-image mb-3">
            <img src={LoginImg} className="img-fluid" alt="Login" />
          </div>
          {/* <p className="text-dark fs-2 p-0 m-0">Be Verified</p>
            <small className="text-dark text-wrap text-center">Join experienced Designers on this platform.</small> */}
        </div>
        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <form onSubmit={handleSubmit}>
              <div className="header-text mb-4">
                <h2>Hello, {user}</h2>
                <p>We are happy to have you back.</p>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg bg-white rounded-pill shadow-sm fs-6"
                  placeholder="Email address"
                  required
                />
              </div>
              <div className="input-group mb-1">
                <input
                  type="password"
                  className="form-control form-control-lg bg-white rounded-pill shadow-sm fs-6"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="input-group mb-5 mt-3 d-flex justify-content-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="formCheck"
                    required
                  />
                  <label
                    htmlFor="formCheck"
                    className="form-check-label text-secondary"
                  >
                    <small>Remember Me</small>
                  </label>
                </div>
                <div className="forgot">
                  <small>
                    <Link to="/password/reset/confirm/:uid/:token">
                      Forgot Password?
                    </Link>
                  </small>
                </div>
              </div>
              <div className="input-group mb-3">
                <button
                  className="btn btn-lg btn-primary w-100 fs-6"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-light w-100 fs-6">
                  <small>Sign In with Google</small>
                </button>
              </div>
              <div className="row">
                <small>
                  Don't have an account? <a href="/register">Sign Up</a>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
