import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchJobPosts } from "../../redux/actions/acs";
import { fetchUserList } from "../../redux/actions/auth";
import { fetchProducts } from "../../redux/actions/ashop"
import CardSmall from "./CardSmall";
import SmallTableJobs from "./smallTableJobs";
import DashboardNavbar from "./Navbar";
import DashboardSidebar from "./Sidebar";
import SmallTableProduct from "./SmallTableProduct";
import SmallTableUsers from "./SmallTableUsers";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const jobPosts = useSelector((state) => state.acs.jobPosts);
  const products = useSelector((state) => state.ashop.products);
  const userList = useSelector((state) => state.auth.userList);

  const activeUsers = userList.filter((user) => user.is_active);

  const totalUser = userList.length;
  const totalActiveUsers = activeUsers.length;
  const totalJobs = jobPosts.length;
  const totalProducts = products.length;

  useEffect(() => {
    dispatch(fetchJobPosts());
    dispatch(fetchProducts());
    dispatch(fetchUserList());
  }, [dispatch]);

  const getFormattedDate = (dateString) => {
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return formattedDate;
  };
  return (
    <>
      <div className="container-xxl position-relative bg-white d-flex p-0 mw-100 mw-100">
        <DashboardSidebar />
        <div className="content nav-content">
          <DashboardNavbar />

          <div className="container-fluid pt-4 px-4">
            <div className="row g-4">

              <CardSmall cardTitle="Total&nbsp;Users" number={totalUser} iconClass="fa fa-users fa-4x text-primary" />
              <CardSmall cardTitle="Active&nbsp;Users" number={totalActiveUsers} iconClass="fa fa-user-plus fa-4x text-primary"/>
              <CardSmall cardTitle="Total&nbsp;Jobs" number={totalJobs} iconClass="fa-solid fa-briefcase fa-4x text-primary"/>
              <CardSmall cardTitle="Total&nbsp;Products" number={totalProducts} iconClass="fa-solid fa-bag-shopping fa-4x text-primary" />
            </div>
          </div>
          <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
              <SmallTableJobs />

              <SmallTableProduct/>
            </div>
          </div>
          <div className="container-fluid pt-4 px-4">
            <div className="bg-light-custom text-center rounded p-4">
              <SmallTableUsers />
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Dashboard;
