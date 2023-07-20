import React from "react";
import { Link } from "react-router-dom";
import carouselImg1 from "../assets/banner-img-1.jpg";
import carouselImg2 from "../assets/banner-img-2.jpg";
import HotSales from "../containers/HotSales";
import TopJobs from "../containers/TopJobs";
import AboutUs from "../containers/AboutUs";
import Services from "../containers/Services";
import Testimonials from "../containers/Testimonials";
import Header from "../containers/Header";

const Home = () => {
  return (
    <>
      <Header/>
      <HotSales />
      <TopJobs />
      <AboutUs />
      <Services />
      <Testimonials />
    </>
  );
};

export default Home;
