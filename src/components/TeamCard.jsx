import React from "react";

const TeamCard = (props) => {
const{img,name,title,facebook,instagram,linkedin,github}=props;
  
  return (
    <>
      <div className=" col-lg-3 me-2 bg-white col-sm-6 col-md-5 d-flex align-items-stretch shadow-sm  mb-3">
        <div className="member mx-0">
          <div className="member-img">
            <img src={img} className="img-fluid mt-2" alt=""/>
          </div>
          <div className="member-info px-3 my-4 text-center">
            <h5>{name}</h5>
            <span className="text-secondary">{title}</span>
          </div>
          <div className="social">
            <a href={facebook}><i className="fab fa-facebook-f fs-5"></i></a>
            <a href={instagram}><i className="fab fa-instagram fs-5"></i></a>
            <a href={linkedin}><i className="fab fa-linkedin fs-5"></i></a>
            <a href={github}><i className="fab fa-github fs-5"></i></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
