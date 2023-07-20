import React, { useEffect } from "react";
import ProfileDetail from "../components/ProfileDetail";
import ProfileEdit from "../components/ProfileEdit";
import ProfilePasswordChange from "../components/ProfilePasswordChange";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import default_user from "../assets/defaults/user.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileBigCard = () => {
  const user = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (user) {
        setLoading(false);
      } else {
        navigate("/");
      }
    });
    return () => clearTimeout(timer);
  }, [navigate]);

  if (loading) {
    return <LoadingSpinner />;
  } else if (user) {
    return (
      <>
        <div className="col-xl-8">
          <div className="mb-3 card">
            <div className="p-3 card-body">
              <ul className="nav nav-tabs nav-tabs-bordered">
                <li className="nav-item">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-overview"
                  >
                    Overview
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-edit"
                  >
                    Edit Profile
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-change-password"
                  >
                    Change Password
                  </button>
                </li>
              </ul>
              <div className="pt-2 tab-content">
                {/* Personal Detail */}
                <div
                  className="tab-pane fade show active profile-overview"
                  id="profile-overview"
                >
                  <ProfileDetail user={user} />
                </div>

                {/* Edit */}
                <div
                  className="pt-3 tab-pane fade profile-edit"
                  id="profile-edit"
                >
                  <ProfileEdit />
                </div>

                <div
                  className="pt-3 tab-pane fade"
                  id="profile-change-password"
                >
                  <ProfilePasswordChange />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (loading) {
    return <LoadingSpinner />;
  }
};

export default ProfileBigCard;
