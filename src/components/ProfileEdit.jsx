import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile, updateAvatar } from "../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import default_user from "../assets/defaults/user.png";
import { passwordResetSuccess } from "../redux/reducers/auth";

const ProfileEdit = ({ user }) => {
  const [profileData, setProfileData] = useState({
    email: user.email,
    username: user.username,
    contact: user.contact,
    first_name: user.first_name,
    last_name: user.last_name,
    gender: user.gender,
    program: user.program,
    enrollment_date: user.enrollment_date,
    name: user.name,
    address: user.address,
    phone: user.phone,
    description: user.description,
    website: user.website,
    github: user.github,
    twitter: user.twitter,
    facebook: user.facebook,
    instagram: user.instagram,
    linkedin: user.linkedin,
    password: "",
  });
  const [selectedAvatar, setSelectedAvatar] = useState("");
  // Set default avatar from user.avatar when the component mounts

  // useEffect(() => {
  //   setSelectedAvatar(user.avatar);
  // }, []);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(profileData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    dispatch(updateProfile(formData));
  };
  const handleChangeAvatar = (e) => {
    e.preventDefault();
    setSelectedAvatar(e.target.files[0]);
  };

  const handleAvatarUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", selectedAvatar);
    formData.append("email", profileData.email);
    formData.append("password", profileData.password);
    dispatch(updateAvatar(formData));
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data">
        <div className="mb-3 row">
          <label className="col-md-4 col-lg-3 col-form-label">
            Profile Image
          </label>
          <div className="col-md-8 col-lg-9">
            <img src={user.avatar || default_user} alt="Profile" />
            <div className="pt-2">
              <input
                name="avatar"
                type="file"
                className="form-control"
                id="avatar"
                onChange={(e) => handleChangeAvatar(e)}
              />
            </div>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-md-4 col-lg-3 col-form-label">Email</label>
          <div className="col-md-8 col-lg-9">
            <input
              name="email"
              type="email"
              className="form-control"
              id="Email"
              value={profileData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-md-4 col-lg-3 col-form-label">Password</label>
          <div className="col-md-8 col-lg-9">
            <input
              name="password"
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password to update your account"
              value={profileData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <button onClick={(e) => handleAvatarUpdate(e)}>Update</button>
        <div className="mb-3 row">
          <label className="col-md-4 col-lg-3 col-form-label">First Name</label>
          <div className="col-md-8 col-lg-9">
            <input
              name="first_name"
              type="text"
              className="form-control"
              id="fullName"
              value={profileData.first_name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-md-4 col-lg-3 col-form-label">Last Name</label>
          <div className="col-md-8 col-lg-9">
            <input
              name="last_name"
              type="text"
              className="form-control"
              id="fullName"
              value={profileData.last_name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-md-4 col-lg-3 col-form-label">About</label>
          <div className="col-md-8 col-lg-9">
            <textarea
              name="description"
              className="form-control"
              id="about"
              style={{ height: "100px" }}
              value={profileData.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-md-4 col-lg-3 col-form-label">Address</label>
          <div className="col-md-8 col-lg-9">
            <input
              name="address"
              type="text"
              className="form-control"
              id="Address"
              value={profileData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-md-4 col-lg-3 col-form-label">Phone</label>
          <div className="col-md-8 col-lg-9">
            <input
              name="phone"
              type="text"
              className="form-control"
              id="Phone"
              value={profileData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-md-4 col-lg-3 col-form-label">
            Twitter Profile
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="twitter"
              type="text"
              className="form-control"
              id="Twitter"
              value={profileData.twitter}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-md-4 col-lg-3 col-form-label">
            Facebook Profile
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="facebook"
              type="text"
              className="form-control"
              id="Facebook"
              value={profileData.facebook}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-md-4 col-lg-3 col-form-label">
            Instagram Profile
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="instagram"
              type="text"
              className="form-control"
              id="Instagram"
              value={profileData.instagram}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-md-4 col-lg-3 col-form-label">
            Linkedin Profile
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="linkedin"
              type="text"
              className="form-control"
              id="Linkedin"
              value={profileData.linkedin}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-3 btn btn-primary"
            onClick={(e) => handleSubmit(e)}
          >
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
};

export default ProfileEdit;
