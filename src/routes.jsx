import React from "react";
import { Routes, Route } from "react-router-dom";
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
import ProductPost from "./components/ProductPost";
import { useState } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";

const AppRoutes = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/home" element={<JobList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/job-list" element={<JobList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/password/reset/confirm/:uid/:token"
          element={<ChangePassword />}
        />
        {/* acs */}
        <Route path="/job-post" element={<JobPost />} />
        <Route path="/job-detail/:id" element={<JobDetail />} />
        <Route path="/job-update/:id" element={<JobUpdate />} />

        {/* ashop  */}
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-post" element={<ProductPost />} />

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
    </>
  );
};

export default AppRoutes;
