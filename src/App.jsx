import React from "react";
import Button from "./components/Button";
import JobList from "./pages/JobList";
import JobItem from "./components/JobItem";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <JobList />
      <div className="m-4"></div>
      <Footer />
    </>
  );
};

export default App;
