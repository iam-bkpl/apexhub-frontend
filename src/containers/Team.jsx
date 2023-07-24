import React from 'react'
import kapil from "../assets/defaults/iambkpl.jpg"
import sabita from "../assets/defaults/sabita.png"
import bhawana from "../assets/defaults/bhawana.jpg"
import roshan from "../assets/defaults/img35.png"

import TeamCard from '../components/TeamCard'
const Team = () => {
  return (
    <>
        <section id="team" className="team section-bg ">
        {/* <div className="container "> */}
            <div className="title text-center pt-3 pb-5">
                <h2 className="position-relative d-inline-block ms-4">Out Team</h2>
            </div>
            <div className="row ps-xs-4 mx-3 d-flex justify-content-center">
                <TeamCard 
                    img={kapil} 
                    name="Kapil&nbsp;Bhandari"
                    title="Backend&nbsp;Developer"
                    facebook=""
                    instagram=""
                    linkedin=""
                    github=""
                />
                <TeamCard 
                    img={sabita} 
                    name="Sabita&nbsp;Shrestha"
                    title="UI/UX&nbsp;Designer"
                    facebook=""
                    instagram=""
                    linkedin=""
                    github=""
                    />
                    <TeamCard 
                    img={bhawana} 
                    name="Bhawana&nbsp;Shrestha"
                    title="Database&nbsp;Designer"
                    facebook=""
                    instagram=""
                    linkedin=""
                    github=""
                    />
                    <TeamCard 
                    img={roshan} 
                    name="Roshan&nbsp;Nyaupane"
                    title="Frontend&nbsp;Developer"
                    facebook=""
                    instagram=""
                    linkedin=""
                    github=""
                    />
            </div>
        {/* </div> */}
    </section>
    </>
  )
}

export default Team