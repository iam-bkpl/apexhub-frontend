import React from "react";
import { Link } from "react-router-dom";
const DashboardSidebar = () => {
  return (
    <>
      <div className="sidebar pe-4 pb-3 dashboard-sidebar">
        <nav className="navbar bg-light-custom navbar-light">
          <a href="index.html" className="navbar-brand mx-4 mb-3">
            <h3 className="text-primary"><i className="fa fa-hashtag me-2 pt-2"></i>Apex-Hub</h3>
          </a>
          <div className="navbar-nav w-100 pt-3">
            <Link to="" className="nav-item nav-link "><i className="fa fa-home me-2"></i>Home</Link>
            <Link to="/dashboard" className="nav-item nav-link"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</Link>
            <Link to="/dashboard-user" className="nav-item nav-link"><i className="fa fa-th me-2"></i>Users</Link>
            <Link to="/dashboard-job" className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Jobs</Link>
            <Link to="/dashboard-product" className="nav-item nav-link"><i className="fa fa-table me-2"></i>Products</Link>
          </div>
        </nav>
      </div>  
    </>
  )
};


export default DashboardSidebar;
