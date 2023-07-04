import React, { useEffect, useState } from "react";
import { Link, useInRouterContext } from "react-router-dom";
import { login } from "../actions/auth";
import LoginImg from "../assets/LoginImg.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLoadFail } from "../reducers/auth";

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
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="header-text mb-4">
                <h2>Hello,| | from the other side</h2>
                <p>We are happy to have you back.</p>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg bg-white rounded-pill shadow-sm fs-6"
                  placeholder="Email address"
                  value={email}
                  name="email"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="input-group mb-1">
                <input
                  type="password"
                  className="form-control form-control-lg bg-white rounded-pill shadow-sm fs-6"
                  placeholder="Password"
                  required
                  name="password"
                  value={password}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="input-group mb-5 mt-3 d-flex justify-content-between">
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
                    {/* <Link to="/password/reset/confirm/:uid/:token"> */}
                    <Link to="/reset-password">Forgot Password?</Link>
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

// export default connect(null, { login })(Login);
export default Login;
