import React from 'react'
import image from "../assets/defaults/iambkpl.jpg"
import TeamCard from '../components/TeamCard'
const Team = () => {
  return (
    <>
        <section id="team" class="team section-bg ">
        {/* <div class="container "> */}
            <div class="title text-center pt-3 pb-5">
                <h2 class="position-relative d-inline-block ms-4">Out Team</h2>
            </div>
            <div class="row ps-xs-4 mx-3 d-flex justify-content-center">
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