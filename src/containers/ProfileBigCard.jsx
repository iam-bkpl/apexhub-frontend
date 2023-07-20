import React from 'react'
import ProfileDetail from '../components/ProfileDetail'
import ProfileEdit from '../components/ProfileEdit'
import ProfilePasswordChange from '../components/ProfilePasswordChange'

const ProfileBigCard = () => {
    return (
        <>
            <div className="col-xl-8">
                <div className="card mb-3">
                    <div className="card-body p-3">
                        <ul className="nav nav-tabs nav-tabs-bordered">
                            <li className="nav-item">
                                <button className="nav-link active" data-bs-toggle="tab"
                                    data-bs-target="#profile-overview">Overview</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change
                                    Password</button>
                            </li>
                        </ul>
                        <div className="tab-content pt-2">
                            {/* Personal Detail */}
                            <div className="tab-pane fade show active profile-overview" id="profile-overview">
                                <ProfileDetail/>
                            </div>

                            {/* Edit */}
                            <div className="tab-pane fade profile-edit pt-3" id="profile-edit">
                                
                                <ProfileEdit/>
                            </div>

                            <div className="tab-pane fade pt-3" id="profile-change-password">
                                <ProfilePasswordChange/>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfileBigCard