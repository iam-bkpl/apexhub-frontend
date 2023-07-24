import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
const Blog = () => {
  return (
    <header id="header" className="vh-100 carousel slide" data-bs-ride="carousel">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="" className="d-block w-100" alt="..." style={{ height: "700px" }} />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
              <div className="container">
                <div className="row justify-content-start mx-3">
                  <div className="col-lg-6">
                    <h1 className="mb-4">Comming Soon...</h1>
                    <p className="mb-5 text-secondary">
                    Welcome to our blog page! We are thrilled to announce that our team is working tirelessly to bring you a brand new platform where we'll be sharing exciting articles, insights, and industry trends. Our blog will cover a wide range of topics, including UI/UX design, web development, and the latest tech innovations. Stay tuned for a captivating and informative experience as we prepare to launch this page very soon! 🚀🌟
                    </p>
                    <Link className="btn btn-primary py-2" text="Go back to Home page">Go Back to Home Page</Link>
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

export default Blog;
