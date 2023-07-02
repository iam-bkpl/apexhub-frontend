import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoginImg from "../assets/LoginImg.png";

const Register = () => {
  const [user_type, setUser_type] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-light shadow box-area">
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box d-none d-md-block">
          <div className="featured-image mb-3">
            <img src={LoginImg} className="img-fluid" alt="Register" />
          </div>
        </div>
        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <form onSubmit={handleSubmit}>
              <div className="header-text mb-4">
                <h2>Sign Up!</h2>
                <p>Get started with your free account</p>
              </div>
              <div className="input-group mb-3 select-user">
                <select
                  className="form-select bg-white rounded-pill shadow-sm fs-6 py-2 text-secondary"
                  required
                >
                  <option disabled value="">
                    Select User
                  </option>
                  <option value="external">External</option>
                  <option value="student">Student</option>
                </select>
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
              <div className="input-group mb-3 mt-5 d-flex justify-content-between">
                <div className="forgot">
                  <small>
                    By clicking register, you agree on our{" "}
                    <a href="#">Privacy Policy</a>
                  </small>
                </div>
              </div>
              <div className="input-group mb-3">
                <button
                  className="btn btn-lg btn-primary w-100 fs-6"
                  type="submit"
                >
                  Register
                </button>
              </div>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-light w-100 fs-6">
                  <small>Sign Up with Google</small>
                </button>
              </div>
              <div className="row">
                <small>
                  Already have an account? <a href="/login">Login</a>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
