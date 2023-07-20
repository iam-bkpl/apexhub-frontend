import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserList } from "../../redux/actions/auth";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Link } from "react-router-dom";
import RowUser from "./RowUser";

const UserTable = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  //Fetching User From store
  const userList = useSelector((state) => state.auth.userList);

  useEffect(() => {
    dispatch(fetchUserList());
    setLoading(false);
  }, [dispatch]);

  const getFormattedDate = (dateString) => {
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return formattedDate;
  };
  console.log(userList);
  if (loading) {
    // return <LoadingSpinner />
  } else {
    return (
      <>
        <div className="container-fluid pt-4 px-4">
          <div className="bg-light-custom text-center rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h4 className="mb-0">User Management</h4>
              {/* <a href="">Show All</a> */}
            </div>
            <div className="table-responsive">
              <table className="table text-start align-middle table-hover table-hover mb-0">
                <thead>
                  <tr className="text-dark">
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Joined&nbsp;Date</th>
                    <th scope="col">User Type</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userList.map((user) => {
                    return (
                      <RowUser
                        key={user.id}
                        id={user.id}
                        email={user.email}
                        username={user.username}
                        firstname={user.first_name}
                        lastname={user.last_name}
                        date={getFormattedDate(user.enrollment_date)}
                        usertype={user.user_type}
                        status={user.is_active}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default UserTable;
