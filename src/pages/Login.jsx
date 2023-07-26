import React, { useEffect, useState } from "react";
import { Link, useInRouterContext } from "react-router-dom";
import { login } from "../redux/actions/auth";
import LoginImg from "../assets/LoginImg.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLoadFail } from "../redux/reducers/auth";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  // if user is  authenticated redirect to homepage
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="p-3 border shadow row rounded-5 bg-light box-area">
          <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box d-none d-md-block">
            <div className="mb-3 featured-image">
              <img src={LoginImg} className="img-fluid" alt="Login" />
            </div>
            {/* <p className="p-0 m-0 text-dark fs-2">Be Verified</p>
            <small className="text-center text-dark text-wrap">Join experienced Designers on this platform.</small> */}
          </div>

          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="mb-4 header-text">
                <h2>Hello,| | from the other side</h2>
                <p>We are happy to have you back.</p>
              </div>

              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3 input-group">
                  <input
                    type="text"
                    className="bg-white shadow-sm form-control form-control-lg rounded-pill fs-6"
                    placeholder="Email address"
                    value={email}
                    name="email"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div className="mb-1 input-group">
                  <input
                    type="password"
                    className="bg-white shadow-sm form-control form-control-lg rounded-pill fs-6"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mt-3 mb-5 input-group d-flex justify-content-between">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="formCheck"
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
                      <Link to="/reset-password">Forgot Password?</Link>
                    </small>
                  </div>
                </div>
                <div className="mb-3 input-group">
                  <button
                    className="btn btn-lg btn-primary w-100 fs-6"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <div className="mb-3 input-group">
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
    </>
  );
};

export default Login;
