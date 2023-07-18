import React from "react";

const TeamCard = () => {
  return (
    <>
      <section id="team" class="team section-bg ">
        <div class="container ">
          <div class="title text-center pt-3 pb-5">
            <h2 class="position-relative d-inline-block ms-4">Out Team</h2>
          </div>
          <div class="row ps-xs-4">
            <div class="col-lg-3 col-sm-6 col-md-5 d-flex align-items-stretch shadow-sm  mb-2">
              <div class="member">
                <div class="member-img">
                  <img src="../images/about-1.jpg" class="img-fluid" alt=""/>
                </div>
                <div class="member-info px-3 my-4 text-center">
                  <h5>Roshan&nbsp;Nyaupane</h5>
                  <span class="text-secondary">Frontend Developer</span>
                </div>
                <div class="social">
                  <a href=""><i class="fab fa-facebook-f fs-5"></i></a>
                  <a href=""><i class="fab fa-instagram fs-5"></i></a>
                  <a href=""><i class="fab fa-linkedin fs-5"></i></a>
                  <a href=""><i class="fab fa-github fs-5"></i></a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6 col-md-5 d-flex align-items-stretch shadow-sm  mb-2">
              <div class="member">
                <div class="member-img">
                  <img src="../images/about-4.jpg" class="img-fluid" alt=""/>
                </div>
                <div class="member-info px-3 my-4 text-center">
                  <h5 class="">Bhawana&nbsp;Shrestha</h5>
                  <span class="text-secondary">Database Designer</span>
                </div>
                <div class="social">
                  <a href=""><i class="fab fa-facebook-f fs-5"></i></a>
                  <a href=""><i class="fab fa-instagram fs-5"></i></a>
                  <a href=""><i class="fab fa-linkedin fs-5"></i></a>
                  <a href=""><i class="fab fa-github fs-5"></i></a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6 col-md-5 d-flex align-items-stretch shadow-sm mb-2">
              <div class="member">
                <div class="member-img">
                  <img src="../images/about-1.jpg" class="img-fluid" alt=""/>
                </div>
                <div class="member-info px-3 my-4 text-center">
                  <h5> Kapil Bhandari</h5>
                  <span class="text-secondary">Backend Developer</span>
                </div>
                <div class="social">
                  <a href=""><i class="fab fa-facebook-f fs-5"></i></a>
                  <a href=""><i class="fab fa-instagram fs-5"></i></a>
                  <a href=""><i class="fab fa-linkedin fs-5"></i></a>
                  <a href=""><i class="fab fa-github fs-5"></i></a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-sm-6 col-md-5 d-flex align-items-stretch shadow-sm mb-2">
              <div class="member">
                <div class="member-img">
                  <img src="../images/about-3.jpg" class="img-fluid" alt=""/>
                </div>
                <div class="member-info px-3 my-4 text-center">
                  <h5>Sabita Shrestha</h5>
                  <span class="text-secondary">UI/UX Designer</span>
                </div>
                <div class="social">
                  <a href=""><i class="fab fa-facebook-f fs-5"></i></a>
                  <a href=""><i class="fab fa-instagram fs-5"></i></a>
                  <a href=""><i class="fab fa-linkedin fs-5"></i></a>
                  <a href=""><i class="fab fa-github fs-5"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamCard;
