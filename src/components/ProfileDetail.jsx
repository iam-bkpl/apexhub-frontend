import React, { useEffect } from "react";

const ProfileDetail = ({ user }) => {
  useEffect(() => {}, [user]);
  console.log("Profile Detail", user);

  const links = () => {
    if (user.user_type === "student") {
      return (
        <>
          <div className="mt-3 row">
            <div className="col-lg-3 col-md-4 label ">Full&nbsp;Name</div>
            <div className="col-lg-9 col-md-8">
              {user.first_name} {user.last_name}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 label">Email</div>
            <div className="col-lg-9 col-md-8">{user.email} </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 label">Phone</div>
            <div className="col-lg-9 col-md-8">{user.phone} </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 label">program</div>
            <div className="col-lg-9 col-md-8">{user.program} </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 label">gender</div>
            <div className="col-lg-9 col-md-8">{user.gender} </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 label">address</div>
            <div className="col-lg-9 col-md-8">{user.address} </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 label">enrollment date</div>
            <div className="col-lg-9 col-md-8">{user.enrollment_date} </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <p className="small fst-italic">{user.description}</p>
          <div className="row">
            <div className="col-lg-3 col-md-4 label">Email</div>
            <div className="col-lg-9 col-md-8">{user.email} </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 label">contact</div>
            <div className="col-lg-9 col-md-8">{user.contact} </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 label">address</div>
            <div className="col-lg-9 col-md-8">{user.address} </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 label">website</div>
            <div className="col-lg-9 col-md-8">{user.website} </div>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <h5 className="mt-3 card-title">About</h5>

      <h5 className="card-title">Profile&nbsp;Details</h5>
      <div>{links()}</div>
      {/* 
      <div className="mt-3 row">
        <div className="col-lg-3 col-md-4 label ">Full&nbsp;Name</div>
        <div className="col-lg-9 col-md-8">
          {user.first_name} {user.last_name}
        </div>
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
        <div className="col-lg-9 col-md-8">
          A108 Adam Street, New York, NY 535022
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-4 label">Phone</div>
        <div className="col-lg-9 col-md-8">(436) 486-3538 x29071</div>
      </div> */}
    </>
  );
};

export default ProfileDetail;
