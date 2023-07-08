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

const AppRoutes = () => {
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
        <Route path="/job-detail/:id" element={<JobDetail />} />
        <Route path="/job-post" element={<JobPost />} />
        {/* <Route
        exact
        path="/activate/:uid/:token"
        component={< />}
      /> */}
        {/* <Route path="/activate/:uid/:token" element={<ResetPassword />} /> */}
        {/* <Route path="/change-password" element={<ChangePassword />} /> */}
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
