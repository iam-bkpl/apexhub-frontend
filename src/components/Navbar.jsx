import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/actions/auth";
import default_user from "../assets/defaults/user.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = async () => {
    navigate("/home");
    await dispatch(logout());
  };

  const authLinks = () => {
    return (
      <li>
        <Link className="dropdown-item" onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket me-3"></i>
          Log Out
        </Link>
      </li>
    );
  };
  const guestLinks = () => {
    return (
      <li>
        <Link to="/login" className="dropdown-item">
          <i className="fa-solid fa-right-from-bracket me-3"></i>
          Log In
        </Link>
      </li>
    );
  };

  return (
    <>
      <nav className="p-0 bg-white shadow navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container pe-1 ms-1 mw-100">
          <button
            className="border-0 navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link
            to="/"
            className="navbar-brand d-flex justify-content-between align-items-start order-lg-0"
          >
            <img src="images/shopping-bag-icon.png" alt="" />
            <span className="text-uppercase fw-lighter ms-2 d-none d-sm-block">
              Apex-Hub
            </span>
          </Link>
          <div className="py-3 order-lg-2 nav-btns text-end">
            <div className="h-auto d-inline">
              <button
                type="button"
                className="p-0 shadow-none btn position-relative ps-0 me-4"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <i className="fa fa-search fs-4 "></i>
              </button>
              <Link
                to="/notification"
                type="button"
                className="p-1 shadow-none text-dark position-relative"
              >
                <i className="fa fa-bell fs-4 "></i>
                <span className="top-0 position-absolute start-100 translate-middle badge bg-primary rounded-circle ms-1">
                  2
                </span>
              </Link>
            </div>

            <button
              type="button"
              className="px-1 py-0 shadow-none btn position-relative ps-4"
            >
              <Link
                className="nav-link nav-profile d-flex align-items-center dropdown-toggle text-dark"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
                id="dropdownMenuLink"
              >
                <img
                  src={user ? user.avatar : default_user}
                  alt="Profile"
                  className="rounded-circle"
                  height="40px"
                  width="40px"
                />
                <span className="d-none d-lg-block text-dark ps-2">
                  {user ? user.username : "Sign In"}
                </span>
              </Link>
              {isAuthenticated ? (
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <Link to="/profile" className="dropdown-item">
                      <i className="fa-solid fa-user me-3"></i>Profile
                    </Link>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-circle-half-stroke me-3"></i>
                      Change Theme
                    </a>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <Link className="dropdown-item" to="/dashboard">
                      <i className="fa-solid fa-gauge me-3"></i>Dashboard
                    </Link>
                  </li>
                  <hr className="dropdown-divider" />
                  {authLinks()}
                </ul>
              ) : (
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <Link to="/login" className="dropdown-item">
                      <i className="fa-solid fa-right-from-bracket me-3"></i>
                      Log In
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="dropdown-item">
                      <i className="fa-solid fa-right-from-bracket me-3"></i>
                      Register
                    </Link>
                  </li>
                </ul>
              )}
            </button>
          </div>

          <div className="collapse navbar-collapse order-lg-1" id="navMenu">
            <ul className="mx-auto text-center navbar-nav ">
              <li className="px-2 py-2 nav-item">
                <Link to="/" className="nav-link text-uppercase text-dark">
                  Home
                </Link>
              </li>
              <li className="px-1 py-2 nav-item">
                <div className=" dropdown">
                  <a
                    href="#"
                    className="nav-link text-uppercase text-dark dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Services
                  </a>
                  <div className="m-0 text-center dropdown-menu rounded-3 border-light">
                    <Link to="/job-list" className="dropdown-item ">
                      Job List
                    </Link>
                    <hr className="dropdown-divider" />
                    <Link to="/product-list" className="dropdown-item">
                      Product List
                    </Link>
                  </div>
                </div>
              </li>
              <li className="px-1 py-2 nav-item">
                <Link to="/about" className="nav-link text-uppercase text-dark">
                  About
                </Link>
              </li>
              <li className="px-1 py-2 nav-item d-lg-none">
                <Link
                  to="/notification"
                  className="nav-link text-uppercase text-dark"
                >
                  Notification
                </Link>
              </li>
              <li className="px-1 py-2 nav-item">
                <Link to="/blog" className="nav-link text-uppercase text-dark">
                  blogs
                </Link>
              </li>
              <li className="px-1 py-2 border-0 nav-item">
                <Link
                  to="/contact"
                  className="nav-link text-uppercase text-dark"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="mt-5 modal fade "
        id="staticBackdrop"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="mt-5 modal-dialog ">
          <div className="modal-content bg-dark">
            <div className="bg-transparent modal-body">
              <form className="d-flex">
                <input
                  className="py-2 text-white bg-transparent border-none shadow-none form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
