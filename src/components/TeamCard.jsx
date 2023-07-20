import React from "react";

const TeamCard = (props) => {
const{img,name,title,facebook,instagram,linkedin,github}=props;
  
  return (
    <>
      <div class=" col-lg-3 me-2 bg-white col-sm-6 col-md-5 d-flex align-items-stretch shadow-sm  mb-3">
        <div class="member mx-0">
          <div class="member-img">
            <img src={img} class="img-fluid mt-2" alt=""/>
          </div>
          <div class="member-info px-3 my-4 text-center">
            <h5>{name}</h5>
            <span class="text-secondary">{title}</span>
          </div>
          <div class="social">
            <a href={facebook}><i class="fab fa-facebook-f fs-5"></i></a>
            <a href={instagram}><i class="fab fa-instagram fs-5"></i></a>
            <a href={linkedin}><i class="fab fa-linkedin fs-5"></i></a>
            <a href={github}><i class="fab fa-github fs-5"></i></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
