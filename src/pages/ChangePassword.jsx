import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ChangePassword = () => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });
  const { new_password, re_new_password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const match = useSelector((state) => state.auth.match);
  const resetPasswordConfirm = useSelector(
    (state) => state.auth.resetPasswordConfirm
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const uid = match.params.uid;
    const token = match.params.token;
    dispatch(resetPasswordConfirm(uid, token, new_password, re_new_password));
    setRequestSent(true);
  };

  useEffect(() => {
    if (requestSent) {
      navigate("/");
    }
  });

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
                name="new_password"
                value={new_password}
                onChange={(e) => handleOnChange(e)}
                required
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control form-control-lg bg-white rounded-pill shadow-sm fs-6"
                placeholder="Confirm Password"
                name="re_new_password"
                value={re_new_password}
                onChange={(e) => handleOnChange(e)}
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
