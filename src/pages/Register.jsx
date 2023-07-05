import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginImg from "../assets/LoginImg.png";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/auth";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [user_type, setUser_type] = useState("");

  const { email, password } = formData;
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ user_type, email, password }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  });
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
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="header-text mb-4">
                <h2>Sign Up!</h2>
                <p>Get started with your free account</p>
              </div>
              <div className="input-group mb-3 select-user">
                <select
                  className="form-select bg-white rounded-pill shadow-sm fs-6 py-2 text-secondary"
                  required
                >
                  <option value="">Select User</option>
                  <option
                    name="external"
                    value="external"
                    onClick={() => setUser_type("external")}
                  >
                    External
                  </option>
                  <option
                    name="student"
                    value="student"
                    onClick={() => setUser_type("student")}
                  >
                    Student
                  </option>
                </select>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg bg-white rounded-pill shadow-sm fs-6"
                  placeholder="Email address"
                  name="email"
                  value={email}
                  onChange={(e) => handleOnChange(e)}
                  required
                />
              </div>
              <div className="input-group mb-1">
                <input
                  type="password"
                  className="form-control form-control-lg bg-white rounded-pill shadow-sm fs-6"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => handleOnChange(e)}
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
