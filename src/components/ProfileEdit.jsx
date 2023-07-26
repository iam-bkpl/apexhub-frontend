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
    // username: user.username,
    user_type: user.user_type,
    contact: user.contact,
    first_name: user.first_name,
    last_name: user.last_name,
    name: user.name,
    address: user.address,
    phone: user.phone,
    description: user.description,
    github: user.github,
    twitter: user.twitter,
    facebook: user.facebook,
    instagram: user.instagram,
    linkedin: user.linkedin,
    website: user.website,

    program: user.program,
    password: "",
  });
  const [selectedAvatar, setSelectedAvatar] = useState();

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
    formData.append("avatar", selectedAvatar);
    dispatch(updateProfile(formData));
  };

  const handleChangeAvatar = (e) => {

    console.log("avatae change avatar");
    setSelectedAvatar(e.target.files[0]);
    console.log("avatar");
    console.log(e.target.files[0]);
    
    e.preventDefault();
    setSelectedAvatar(e.target.files[0]);
    

  };

  const handleAvatarUpdate = (e) => {
    e.preventDefault();
    console.log(selectedAvatar);

    const imgData = new FormData();
    imgData.append("avatar", selectedAvatar);
    imgData.append("email", profileData.email);
    imgData.append("password", profileData.password);
    imgData.append("user_type", profileData.user_type);
    console.log(imgData.get("avatar"));
    console.log(imgData);
    dispatch(updateAvatar(imgData));
  };

  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                onChange={handleChangeAvatar}
                encType="multipart/form-data"
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
              id="address"
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
              id="phone"
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
              id="twitter"
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
              id="facebook"
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
              id="instagram"
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
              id="linkedin"
              value={profileData.linkedin}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-md-4 col-lg-3 col-form-label">
            Website Page
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="website"
              type="text"
              className="form-control"
              id="website"
              value={profileData.website}
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
