import React from 'react'

const ProfileDetail = () => {
    return (
        <>
            <h5 className="card-title mt-3">About</h5>
            <p className="small fst-italic">Sunt est soluta temporibus accusantium neque nam maiores cumque
                temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem
                eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</p>

            <h5 className="card-title">Profile&nbsp;Details</h5>

            <div className="row mt-3">
                <div className="col-lg-3 col-md-4 label ">Full&nbsp;Name</div>
                <div className="col-lg-9 col-md-8">Kevin Anderson</div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-4 label">Company</div>
                <div className="col-lg-9 col-md-8">Lueilwitz, Wisoky and Leuschke</div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-4 label">Job</div>
                <div className="col-lg-9 col-md-8">Web Designer</div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-4 label">Country</div>
                <div className="col-lg-9 col-md-8">USA</div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-4 label">Address</div>
                <div className="col-lg-9 col-md-8">A108 Adam Street, New York, NY 535022</div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-4 label">Phone</div>
                <div className="col-lg-9 col-md-8">(436) 486-3538 x29071</div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-4 label">Email</div>
                <div className="col-lg-9 col-md-8">k.anderson@example.com</div>
            </div>
        </>
    )
}

export default ProfileDetail