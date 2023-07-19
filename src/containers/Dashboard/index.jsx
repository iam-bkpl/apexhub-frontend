import React from "react";
import DashboardNavbar from "./Navbar";
import CardSmall from "./CardSmall";
import SmallTableJobs from "./smallTableJobs";
import DashboardSidebar from "./Sidebar";
import SmallTableProduct from "./SmallTableProduct";
import UserTable from "./UserTable"

const Dashboard = () => {
  return (
    <>
      <div className="container-xxl position-relative bg-white d-flex p-0 mw-100 mw-100">
        <DashboardSidebar />
        <div className="content ms-auto nav-content">
          <DashboardNavbar />

          <div className="container-fluid pt-4 px-4">
            <div className="row g-4">

              <CardSmall />
            </div>
          </div>
          <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
              <SmallTableJobs />
              <SmallTableProduct />
            </div>
          </div>
          <div className="container-fluid pt-4 px-4">
            <div className="bg-light-custom text-center rounded p-4">
              <UserTable/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Dashboard;
