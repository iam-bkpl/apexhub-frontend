import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/actions/auth";

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
        <Link to="/login" className="dropdown-item" onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket me-3"></i>
          Log In
        </Link>
      </li>
    );
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <div className="container pe-1 ms-1 mw-100">
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand d-flex justify-content-between align-items-start order-lg-0" >
            <img src="images/shopping-bag-icon.png" alt="" />
            <span className="text-uppercase fw-lighter ms-2 d-none d-sm-block">Apex-Hub</span>
          </Link>
          <div className="order-lg-2 nav-btns text-end py-3">
            <div className="d-inline h-auto">
              <button type="button" className="btn position-relative shadow-none ps-0  p-0 me-4" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop">
                <i className="fa fa-search fs-4 "></i>
              </button>
              <Link to="/notification" type="button" className=" text-dark position-relative shadow-none p-1 ">
                <i className="fa fa-bell fs-4 "></i>
                <span className="position-absolute top-0 start-100 translate-middle badge bg-primary rounded-circle ms-1">2</span>
              </Link>
            </div>
            <button type="button" className="btn position-relative ps-4 px-1 py-0 shadow-none">
              <Link className="nav-link nav-profile d-flex align-items-center dropdown-toggle text-dark"
                data-bs-toggle="dropdown" role="button" aria-expanded="false" id="dropdownMenuLink">
                <img src="https://lh3.googleusercontent.com/ogw/AOLn63G1kDp1EeTErP0dkuwBHG__AgdaHXm4jbaON9IPc0M=s32-c-mo"
                  alt="Profile" className="rounded-circle" height="40px" width="40px" />
                <span className="d-none d-lg-block text-dark ps-2">Roshan Nyaupane</span>
              </Link>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><Link to="/profile" className="dropdown-item"><i
                  className="fa-solid fa-user me-3"></i>Profile</Link></li>
                <hr className="dropdown-divider" />
                <li>
                  <a className="dropdown-item" href="#"><i className="fa-solid fa-circle-half-stroke me-3"></i>Change
                    Theme</a></li>
                <hr className="dropdown-divider" />
                <li>
                  <a className="dropdown-item" href="./pages/dashHome.html"><i
                    className="fa-solid fa-gauge me-3"></i>Dashboard
                  </a>
                </li>
                <hr className="dropdown-divider" />
                {isAuthenticated ? authLinks() : guestLinks()}
              </ul>
            </button>
          </div>

          <div className="collapse navbar-collapse order-lg-1" id="navMenu">
            <ul className="navbar-nav mx-auto text-center ">
              <li className="nav-item px-2 py-2">
                <Link to="/" className="nav-link text-uppercase text-dark">Home</Link>
              </li>
              <li className="nav-item px-1 py-2">
                <div className=" dropdown">
                  <a href="#" className="nav-link text-uppercase text-dark dropdown-toggle"
                    data-bs-toggle="dropdown">Services</a>
                  <div className="dropdown-menu rounded-3 m-0 border-light text-center">
                    <Link to="/job-list" className="dropdown-item ">Job List</Link>
                    <hr className="dropdown-divider" />
                    <Link to="/product-list" className="dropdown-item">Product List</Link>
                  </div>
                </div>
              </li>
              <li className="nav-item px-1 py-2">
                <Link to="/about" className="nav-link text-uppercase text-dark">About</Link>
              </li>
              <li className="nav-item px-1 py-2 d-lg-none">
                <Link to="/notification" className="nav-link text-uppercase text-dark">Notification</Link>
              </li>
              <li className="nav-item px-1 py-2">
                <Link to="/blog" className="nav-link text-uppercase text-dark">blogs</Link>
              </li>
              <li className="nav-item px-1 py-2 border-0">
                <Link to="/contact" className="nav-link text-uppercase text-dark">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Search Modal  */}
      <div className="modal fade mt-5 " id="staticBackdrop" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog mt-5 ">
          <div className="modal-content bg-dark">
            <div className="modal-body bg-transparent">
              <form className="d-flex">
                <input className="form-control me-2 py-2 bg-transparent shadow-none border-none text-white" type="search" placeholder="Search" aria-label="Search"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

