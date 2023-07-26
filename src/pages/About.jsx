import React from 'react'
import AboutUs from '../containers/AboutUs'
import Team from '../containers/Team'
import Header from '../containers/Header'
import image1 from "../assets/backgrounds/bg3.jpg"
import image2 from "../assets/backgrounds/bg4.jpg"

const About = () => {
  return (
    <>
            <Header img1={image1} img2={image2}/>
            <AboutUs/>
            <Team/>
    </>
  )
}

export default About