import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark mt-5">
      <div className="container-fluid ">
        <div className="row text-white g-4">
          <div className="col-md-6 col-lg-3">
            <Link
              className="text-uppercase text-decoration-none brand text-white"
              to="/"
            >
              APEX-HUB
            </Link>
            <p className="text-white text-muted mt-3">
              ApexHub is not just a job portal, but a gateway to future success.
            </p>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light">Links</h5>
            <ul className="list-unstyled">
              <li className="my-3">
                <Link
                  to="/"
                  className="text-white text-decoration-none text-muted"
                >
                  <i className="fas fa-chevron-right me-1"></i> Home
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/about"
                  className="text-white text-decoration-none text-muted"
                >
                  <i className="fas fa-chevron-right me-1"></i> About
                </Link>
              </li>
              <li className="my-3">
                <a
                  href="/blog"
                  className="text-white text-decoration-none text-muted"
                >
                  <i className="fas fa-chevron-right me-1"></i> Blogs
                </a>
              </li>
              <li className="my-3">
                <Link
                  href="#"
                  className="text-white text-decoration-none text-muted"
                >
                  <i className="fas fa-chevron-right me-1"></i> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light mb-3">Contact Us</h5>
            <div className="d-flex justify-content-start align-items-start my-3 text-muted">
              <span className="me-3">
                <i className="fas fa-map-marked-alt"></i>
              </span>
              <span className="fw-light">
                New Baneshwor, Kathmandu, Nepal
              </span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-3 text-muted">
              <span className="me-3">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="fw-light">apexhubcontact@gmail.com</span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-3 text-muted">
              <span className="me-3">
                <i className="fas fa-phone-alt"></i>
              </span>
              <span className="fw-light">+977-9840953995</span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-3 text-muted">
              <span className="me-3">
                <i className="fas fa-phone-alt"></i>
              </span>
              <span className="fw-light">+977-9840953995</span>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light mb-3">Follow Us</h5>
            <div>
              <ul className="list-unstyled d-flex">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100094592247221"
                    target="_blank"
                    className="text-white text-decoration-none text-muted fs-4 me-4"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none text-muted fs-4 me-4"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none text-muted fs-4 me-4"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none text-muted fs-4 me-4"
                  >
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
