import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserList } from "../../redux/actions/auth";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "./Sidebar";
import DashboardNavbar from "./Navbar";
import UserTable from "./UserTable";
import CardBig from "./CardBig";

const UserDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  const userList = useSelector((state) => state.auth.userList);

  // Filter active and inactive products
  const activeUsers = userList.filter((user) => user.is_active);
  const inactiveUsers = userList.filter((user) => !user.is_active);

  //Get Total Number of users
  const totalUser = userList.length;
  const totalActiveUsers = activeUsers.length;
  const totalInactiveUsers = inactiveUsers.length;

  return (
    <>
      <div className="container-xxl position-relative bg-white d-flex p-0 mw-100">
        <DashboardSidebar />

        <div className="content nav-content">
          <DashboardNavbar />

          <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
              <CardBig
                cardTitle="Total Users"
                number={totalUser}
                iconClass="fa fa-users fa-4x text-primary"
              />
              <CardBig
                cardTitle="Active Users"
                number={totalActiveUsers}
                iconClass="fa fa-user-plus fa-4x text-primary"
              />
              <CardBig
                cardTitle="Blocked Users"
                number={totalInactiveUsers}
                iconClass="fa fa-user-lock fa-4x text-primary"
              />
            </div>
          </div>
          <UserTable />
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
