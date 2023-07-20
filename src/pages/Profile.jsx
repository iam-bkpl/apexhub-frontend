import React from 'react'
import ProfileSmallCard from '../components/ProfileSmallCard'
import ProfileBigCard from '../containers/ProfileBigCard'

const Profile = () => {
    return (
        <>
            <section className="section profile mt-5">
                <div className="row">

                    <ProfileSmallCard/>
                    <ProfileBigCard />

                </div>
            </section>
        </>
    )
}

export default Profile
