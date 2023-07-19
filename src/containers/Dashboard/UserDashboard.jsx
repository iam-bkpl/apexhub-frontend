import React from 'react'
import DashboardSidebar from './Sidebar'
import DashboardNavbar from './Navbar'
import SmallCard from './CardSmall'
import UserTable from './UserTable'
import CardBig from './CardBig'

const UserDashboard = () => {
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