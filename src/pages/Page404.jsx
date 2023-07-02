import React from "react";

const Error404 = () => {
  return (
    <header
      id="header"
      className="vh-100 carousel slide"
      data-bs-ride="carousel"
    >
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../images/about-us.jpg"
              className="d-block w-100"
              alt="..."
              style={{ height: "700px" }}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
              <div className="container">
                <div className="row justify-content-start mx-3">
                  <div className="col-lg-6">
                    <h1 className="display-1">404</h1>
                    <h1 className="mb-4">Page Not Found</h1>
                    <p className="mb-5 text-secondary">
                      We’re sorry, the page you have looked for does not exist
                      in our website! Maybe go to our home page or try to use a
                      search?
                    </p>
                    <a
                      href="#"
                      className="py-3 px-5 mt-5 rounded-pill text-uppercase text-decoration-none main-btn fs-5 text-white"
                    >
                      Go Back To Home
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Error404;
