import React from "react";

const Navbar = () => {
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
        <a
          className="navbar-brand d-flex justify-content-between align-items-start order-lg-0"
          href="./index.html"
        >
          <img src="images/shopping-bag-icon.png" alt="site icon" />
          <span className="text-uppercase fw-lighter ms-2 d-none d-sm-block">
            Apex-HUB
          </span>
        </a>
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
              <a
                className="nav-link text-uppercase text-dark"
                href="./index.html"
              >
                Home
              </a>
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
                  <a href="./pages/jobs.html" className="dropdown-item">
                    Job List
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="./pages/aShop.html" className="dropdown-item">
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
