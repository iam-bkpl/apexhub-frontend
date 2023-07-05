import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import JobList from "./pages/JobList";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import ChangePassword from "./pages/ChangePassword";
import Error404 from "./pages/Page404";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<JobList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/job-list" element={<JobList />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route
        path="/password/reset/confirm/:uid/:token"
        element={<ChangePassword />}
      />
      {/* <Route
        exact
        path="/activate/:uid/:token"
        component={< />}
      /> */}
      {/* <Route path="/activate/:uid/:token" element={<ResetPassword />} /> */}
      {/* <Route path="/change-password" element={<ChangePassword />} /> */}
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRoutes;
