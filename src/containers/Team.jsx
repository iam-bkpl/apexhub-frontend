import React from 'react'
import image from "../assets/defaults/iambkpl.jpg"
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
                    img={image} 
                    name="Kapil&nbsp;Bhandari"
                    title="Backend&nbsp;Developer"
                    facebook=""
                    instagram=""
                    linkedin=""
                    github=""
                />
                <TeamCard 
                    img={image} 
                    name="Kapil&nbsp;Bhandari"
                    title="Backend&nbsp;Developer"
                    facebook=""
                    instagram=""
                    linkedin=""
                    github=""
                    />
                    <TeamCard 
                    img={image} 
                    name="Kapil&nbsp;Bhandari"
                    title="Backend&nbsp;Developer"
                    facebook=""
                    instagram=""
                    linkedin=""
                    github=""
                    />
                    <TeamCard 
                    img={image} 
                    name="Kapil&nbsp;Bhandari"
                    title="Backend&nbsp;Developer"
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