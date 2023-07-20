import React from "react";
import ProfileSmallCard from "../components/ProfileSmallCard";
import ProfileBigCard from "../containers/ProfileBigCard";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  //   const user = useSelector((state) => state.auth.users);

  return (
    <>
      <section className="mt-5 section profile">
        <div className="row">
          <ProfileSmallCard />
          <ProfileBigCard />
        </div>
      </section>
    </>
  );
};

export default Profile;
