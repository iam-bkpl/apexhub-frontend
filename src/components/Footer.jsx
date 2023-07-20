import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark mt-5">
      <div className="container-fluid ">
        <div className="row text-white g-4">
          <div className="col-md-6 col-lg-3">
            <a
              className="text-uppercase text-decoration-none brand text-white"
              href="index.html"
            >
              Attire
            </a>
            <p className="text-white text-muted mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              mollitia quisquam veniam odit cupiditate, ullam aut voluptas velit
              dolor ipsam?
            </p>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light">Links</h5>
            <ul className="list-unstyled">
              <li className="my-3">
                <a
                  href="#"
                  className="text-white text-decoration-none text-muted"
                >
                  <i className="fas fa-chevron-right me-1"></i> Home
                </a>
              </li>
              <li className="my-3">
                <a
                  href="#"
                  className="text-white text-decoration-none text-muted"
                >
                  <i className="fas fa-chevron-right me-1"></i> Collection
                </a>
              </li>
              <li className="my-3">
                <a
                  href="#"
                  className="text-white text-decoration-none text-muted"
                >
                  <i className="fas fa-chevron-right me-1"></i> Blogs
                </a>
              </li>
              <li className="my-3">
                <a
                  href="#"
                  className="text-white text-decoration-none text-muted"
                >
                  <i className="fas fa-chevron-right me-1"></i> About Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light mb-3">Contact Us</h5>
            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <i className="fas fa-map-marked-alt"></i>
              </span>
              <span className="fw-light">
                Albert Street, New York, AS 756, United States of America
              </span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="fw-light">attire.support@gmail.com</span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <i className="fas fa-phone-alt"></i>
              </span>
              <span className="fw-light">+9786 6776 236</span>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light mb-3">Follow Us</h5>
            <div>
              <ul className="list-unstyled d-flex">
                <li>
                  <a
                    href="#"
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
