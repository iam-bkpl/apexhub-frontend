import React, { useEffect, useState, useSyncExternalStore } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../redux/actions/auth";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [requestSent, setRequestSent] = useState(false);

  function handleOnChange(e) {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    dispatch(resetPassword(email));
    setRequestSent(true);
    e.preventDefault();
  };

  useEffect(() => {
    if (requestSent) {
      navigate("/home");
    }
  }, [requestSent]);

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-5 bg-light right-box shadow rounded-5">
        <div className="row align-items-center">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="header-text mb-4">
              <h2>Reset Password</h2>
              <p>Enter your email to reset your password</p>
            </div>
            <div className="input-group mb-3">
              <input
                type="email"
                name="email"
                className="form-control form-control-lg bg-white rounded-pill shadow-sm fs-6"
                placeholder="Email address"
                onChange={(e) => handleOnChange(e)}
                required
              />
            </div>
            <div className="input-group mb-3 mt-3">
              <button className="btn btn-lg btn-primary w-100 fs-6">
                Send Reset Link
              </button>
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
