import React from "react";
import { useState, useEffect } from "react";
import RowJob from "./RowJob";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobPosts } from "../../redux/actions/acs";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Link } from "react-router-dom";

const JobTable = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  //Fetching Jobposts from store
  const jobPosts = useSelector((state) => state.acs.jobPosts);
  //Fetching Jobtype from store
  const jobType = useSelector((state) => state.acs.jobPosts);

  useEffect(() => {
    dispatch(fetchJobPosts());
    setLoading(false);
  }, [dispatch]);

  console.log("Josposts are ", jobPosts);

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
    return (
      <>
        <div className="container-fluid pt-4 px-4">
          <div className="bg-light-custom text-center rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h4 className="mb-0">Jobs Management</h4>
              {/* <a href="">Show All</a> */}
            </div>
            <div className="table-responsive">
              <table className="table text-start align-middle table-hover table-hover mb-0">
                <thead>
                  <tr className="text-dark">
                    <th scope="col">SN</th>
                    <th scope="col">Company&nbsp;Name</th>
                    <th scope="col">Job&nbsp;title</th>
                    <th scope="col">Posted&nbsp;Date</th>
                    <th scope="col" className="text-center">
                      &nbsp;Applications
                    </th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    <th scope="col">View</th>
                  </tr>
                </thead>
                <tbody>
                  {jobPosts.map((jobpost) => {
                    return (
                      <RowJob
                        key={jobpost.id}
                        id={jobpost.id}
                        company={jobpost.company}
                        title={jobpost.title}
                        date={getFormattedDate(jobpost.date_added)}
                        application_count={jobpost.application_count}
                        description={jobpost.description}
                        status={jobpost.is_active}
                        location={jobpost.location}
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

export default JobTable;
