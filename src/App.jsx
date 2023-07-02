import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Button from "./components/Button";
import JobList from "./pages/JobList";
import JobItem from "./components/JobItem";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Error404 from "./pages/Page404";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<JobList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/job-list" element={<JobList />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
