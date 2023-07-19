import React,{ useEffect, useState }  from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchJobPosts } from "../../redux/actions/acs";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from './Sidebar'
import DashboardNavbar from './Navbar'
import SmallCard from './CardSmall'
import UserTable from './UserTable'
import CardBig from './CardBig'

const UserDashboard = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
  return (
    <>
      <div className="container-xxl position-relative bg-white d-flex p-0 mw-100">
        <DashboardSidebar />

        <div className="content nav-content">
          <DashboardNavbar />

          <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
              <CardBig />
            </div>
          </div>

          <UserTable
          />

        </div>

      </div>
    </>
  )
}

export default UserDashboard