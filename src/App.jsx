import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Button from "./components/Button";
import JobList from "./pages/JobList";
import JobItem from "./components/JobItem";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Error404 from "./pages/Page404";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<JobList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/job-list" element={<JobList />} />
          <Route path="/register" element={<Register />} />

          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
