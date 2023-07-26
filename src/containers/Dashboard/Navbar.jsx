import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/defaults/Apex_hub_logo.png"
import image from "../../assets/defaults/iambkpl.jpg"

const DashboardNavbar = () => {
  
  return (
    
    <>
      <nav className="navbar navbar-expand bg-light-custom navbar-light sticky-top px-4 py-0"style={{height:"60px"}}>
        {/* <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
          <h2 className="text-primary mb-0"><i className="fa fa-hashtag"></i></h2>
        </a> */}
        {/* <a href="#" className="sidebar-toggler flex-shrink-0">
          <i className="fa fa-bars"></i>
        </a> */}
        <form className="d-none d-md-flex ms-4 w-50">
          <input className="form-control border-0" type="search" placeholder="Search"/>
        </form>
        <div className="navbar-nav align-items-center ms-auto">
          <div className="nav-item ">
            <a href="#" className="nav-link " data-bs-toggle="dropdown">
              <img className="rounded-circle me-lg-2" src={image} alt="" style={{width: "40px",height: "40px"}}/>
                <span className="d-none d-lg-inline-flex">bSatya</span>
            </a>
            {/* <div className="dropdown-menu dropdown-menu-end bg-light-custom border-0 rounded-0 rounded-bottom m-0">
              <Link to="" className="dropdown-item">My Profile</Link>
              <Link to="" className="dropdown-item">Settings</Link>
              <Link to="" className="dropdown-item">Log Out</Link>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  )
};

export default DashboardNavbar;
