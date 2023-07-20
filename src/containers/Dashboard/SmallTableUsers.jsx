import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserList } from '../../redux/actions/auth';
import LoadingSpinner from '../../components/LoadingSpinner';
import { Link } from 'react-router-dom';
import RowUser from './RowUser';

const SmallTableUsers = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // Fetching User From store
  const userList = useSelector((state) => state.auth.userList);

  useEffect(() => {
    dispatch(fetchUserList());
    setLoading(false);
  }, [dispatch]);

  const getFormattedDate = (dateString) => {
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    return formattedDate;
  };

  console.log(userList);

  if (loading) {
    // return <LoadingSpinner />
  } else {
    // Sort userList by joined date in descending order
    const sortedUserList = [...userList].sort(
        (a, b) => new Date(b.enrollment_date) - new Date(a.enrollment_date)
      );
    // Get the most recent 5 users
    const recentUsers = sortedUserList.slice(0, 5);

    return (
      <>
        <div className="container-fluid pt-4 px-4">
          {/* <div className="bg-light-custom text-center rounded p-4"> */}
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h4 className="mb-0">User Management</h4>
              <Link to="/dashboard-user">Show All</Link>
            </div>
            <div className="table-responsive">
              <table className="table text-start align-middle table-hover table-hover mb-0">
                <thead>
                  <tr className="text-dark">
                    <th scope="col">#</th>
                    <th scope="col">First&nbsp;Name</th>
                    <th scope="col">Last&nbsp;Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Joined&nbsp;Date</th>
                    <th scope="col">User&nbsp;Type</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.username}</td>
                        <td>{getFormattedDate(user.enrollment_date)}</td>
                        <td>{user.user_type}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          {/* </div> */}
        </div>
      </>
    );
  }
};

export default SmallTableUsers;
