import React from "react";
import { useState, useEffect } from "react";
import { fetchJobPosts } from "../../redux/actions/acs";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Link } from "react-router-dom";

const SmallTableJobs = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // Fetching Jobposts from store
  const jobPosts = useSelector((state) => state.acs.jobPosts);

  useEffect(() => {
    dispatch(fetchJobPosts());
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

  if (loading) {
    return <LoadingSpinner />;
  } else {
    // Sort jobPosts by date_added in descending order
    const sortedJobPosts = [...jobPosts].sort(
      (a, b) => new Date(b.date_added) - new Date(a.date_added)
    );
    // Get the most recent 6 job posts
    const recentJobs = sortedJobPosts.slice(0, 4);

    return (
      <>
        <div className="col-sm-12 col-xl-6">
          <div className="bg-light-custom table-responsive rounded h-100 p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h4 className="mb-0">Recent Jobs</h4>
              <Link to="/dashboard-job">Show All</Link>
            </div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col" width="20%">
                    Job&nbsp;Id
                  </th>
                  <th scope="col" width="30%">
                    Company
                  </th>
                  <th scope="col" width="40%">
                    Job&nbsp;Title
                  </th>
                  <th scope="col" width="20%">
                    Job&nbsp;Type
                  </th>
                  <th scope="col" width="20%">
                    Created&nbsp;Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentJobs.map((jobpost) => {
                  return (
                    <tr key={jobpost.id}>
                      <td>#{jobpost.id}</td>
                      <td>{jobpost.company}</td>
                      <td>{jobpost.title}</td>
                      <td>{jobpost.job_type}</td>
                      <td>{getFormattedDate(jobpost.date_added)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
};

export default SmallTableJobs;
