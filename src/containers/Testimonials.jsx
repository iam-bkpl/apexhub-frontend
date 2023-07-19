import React from "react";
import iambkpl from "../assets/defaults/iambkpl.jpg";

const Testimonials = () => {
  return (
    <>
      <section class="team section-bg">
        <div class="title text-center pt-3 pb-5">
          <h2 class="position-relative d-inline-block ms-4">Our Client Says</h2>
        </div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active bg-secondary"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              class="bg-secondary"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              class="bg-secondary"
            ></button>
          </div>
          <div class="carousel-inner w-auto px-5 ms-5">
            <div class="carousel-item active" data-bs-interval="5000">
              <div class="row mb-5">
                <div class="col-lg-3 col-sm-6 col-md-5 d-flex align-items-stretch mb-2">
                  <div class="member">
                    <div class="member-img">
                      <img
                        src={iambkpl}
                        class="img-fluid rounded-pill"
                        alt=""
                      />
                    </div>
                    <div class="member-info px-3 my-4  text-center">
                      <h4>Client 4</h4>
                      <small class="text-secondary">
                        One aspect that sets APEX-HUB apart from others is the
                        exceptional customer support.
                      </small>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-sm-6 col-md-5 d-flex align-items-stretch mb-2">
                  <div class="member">
                    <div class="member-img">
                      <img
                        src={iambkpl}
                        class="img-fluid rounded-pill"
                        alt=""
                      />
                    </div>
                    <div class="member-info px-3 my-4 text-center">
                      <h4>Client 3</h4>
                      <span class="text-secondary">Description </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <div class="row mb-5">
                <div class="col-lg-3 col-sm-6 col-md-5 d-flex align-items-stretch mb-2 ">
                  <div class="member">
                    <div class="member-img">
                      <img
                        src={iambkpl}
                        class="img-fluid rounded-pill"
                        alt=""
                      />
                    </div>
                    <div class="member-info px-3 my-4 text-center">
                      <h4>Client 2</h4>
                      <span class="text-secondary">Description</span>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-sm-6 col-md-5 d-flex align-items-stretch mb-2 ">
                  <div class="member">
                    <div class="member-img">
                      <img
                        src={iambkpl}
                        class="img-fluid rounded-pill"
                          alt=""
                      />
                    </div>
                    <div class="member-info px-3 my-4 text-center">
                      <h4>Client 2</h4>
                      <span class="text-secondary">
                        Description that sets APEX-HUB apart from others is the
                        exceptional customer support.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
