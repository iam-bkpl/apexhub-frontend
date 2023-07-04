import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/auth";
import auth from "../reducers/auth";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
  };

  const authLinks = () => {
    return (
      <li className="nav-item px-1 py-2 border-0">
        <button
          className="nav-link text-uppercase text-dark"
          onClick={handleLogout}
          type="button"
        >
          Logout
        </button>
      </li>
    );
  };
  const guestLinks = () => {
    return (
      <li className="nav-item px-1 py-2 border-0">
        <Link
          className="nav-link text-uppercase text-dark"
          // onClick={() => handleLogout()}
          type="submit"
          to="/"
        >
          Login
        </Link>
      </li>
    );
  };
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <div className="container">
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link
          className="navbar-brand d-flex justify-content-between align-items-start order-lg-0"
          to="/"
        >
          <img src="images/shopping-bag-icon.png" alt="site icon" />
          <span className="text-uppercase fw-lighter ms-2 d-none d-sm-block">
            Apex-HUB
          </span>
        </Link>
        <div className="order-lg-2 nav-btns text-end py-3">
          <button
            type="button"
            className="btn position-relative shadow-none"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa fa-search fs-4"></i>
          </button>
          <a
            type="button"
            className="text-dark position-relative d-none d-lg-inline shadow-none"
            href="./pages/notification.html"
          >
            <i className="fa fa-bell fs-4"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge bg-primary rounded-circle">
              2
            </span>
          </a>
          <button type="button" className="btn position-relative">
            <a
              className="nav-link nav-profile d-flex align-items-center pe-0 show"
              href="./pages/profile.html"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              <img
                src="https://lh3.googleusercontent.com/ogw/AOLn63G1kDp1EeTErP0dkuwBHG__AgdaHXm4jbaON9IPc0M=s32-c-mo"
                alt="Profile"
                className="rounded-circle"
                height="40px"
                width="40px"
              />
              <span className="d-none d-md-block text-dark ps-2">
                Roshan Nyaupane
              </span>
            </a>
          </button>
        </div>

        <div className="collapse navbar-collapse order-lg-1" id="navMenu">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item px-2 py-2">
              <Link className="nav-link text-uppercase text-dark" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item px-1 py-2">
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link text-uppercase text-dark dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Services
                </a>
                <div className="dropdown-menu rounded-3 m-0 border-light text-center">
                  <Link to="/job-list" className="dropdown-item">
                    Job List
                  </Link>
                  <hr className="dropdown-divider" />
                  <a href="/product-list" className="dropdown-item">
                    Product List
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item px-1 py-2">
              <a
                className="nav-link text-uppercase text-dark"
                href="./pages/aboutUs.html"
              >
                About
              </a>
            </li>
            <li className="nav-item px-1 py-2 d-lg-none">
              <a
                className="nav-link text-uppercase text-dark"
                href="./pages/notification.html"
              >
                Notification
              </a>
            </li>
            <li className="nav-item px-1 py-2">
              <a
                className="nav-link text-uppercase text-dark"
                href="./pages/blogs.html"
              >
                Blogs
              </a>
            </li>
            <li className="nav-item px-1 py-2 border-0">
              <a
                className="nav-link text-uppercase text-dark"
                href="./pages/contactUs.html"
              >
                Contact
              </a>
            </li>
            {isAuthenticated ? authLinks() : guestLinks()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
