import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import JobList from "./pages/JobList";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import ChangePassword from "./pages/ChangePassword";
import Error404 from "./pages/Page404";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JobDetail from "./pages/JobDetail";
import JobPost from "./pages/JobPost";
import JobUpdate from "./pages/JobUpdate";
import ProductList from "./components/ProductList";
import ProductDetail from "./pages/ProductDetail";
import ProductPost from "./components/ProductPost";
import { useState } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import Contact from "./pages/Contact";
import JobsDashboard from "./containers/Dashboard/JobsDashboard";
import IndexDashboard from "./containers/Dashboard/index"
import ProductDashboard from "./containers/Dashboard/ProductDashboard"
import UserDashboard from "./containers/Dashboard/UserDashboard"
import { useDispatch, useSelector } from "react-redux";

const AppRoutes = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const location = useLocation();
  const hideNavbarAndFooter = [
    "/dashboard",
    "/dashboard-job",
    "/dashboard-user",
    "/dashboard-product"
  ].includes(location.pathname);

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/job-list" element={<JobList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/password/reset/confirm/:uid/:token"
          element={<ChangePassword />}
        />
        <Route path="/contact" element={<Contact />} />
        {/* acs */}
        <Route path="/job-post" element={<JobPost />} />
        <Route path="/job-detail/:id" element={<JobDetail />} />
        <Route path="/job-update/:id" element={<JobUpdate />} />

        {/* ashop  */}
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/product-post" element={<ProductPost />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<IndexDashboard />} />
        <Route path="/dashboard-job" element={<JobsDashboard />} />
        <Route path="/dashboard-user" element={<UserDashboard />} />
        <Route path="/dashboard-product" element={<ProductDashboard />} />

        {/* <Route
        exact
        path="/activate/:uid/:token"
        component={< />}
      /> */}
        {/* <Route path="/activate/:uid/:token" element={<ResetPassword />} /> */}
        {/* <Route path="/change-password" element={<ChangePassword />} /> */}
        <Route path="/loading" element={<LoadingSpinner />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
     
    </>
  );
};

export default AppRoutes;
