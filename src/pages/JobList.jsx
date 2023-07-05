import LoadingSpinner from "../components/LoadingSpinner";
import axios from "axios";
import React, { useEffect, useState } from "react";
import JobItem from "../components/JobItem";
import { getJobs } from "../api/jobList";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobPosts } from "../redux/actions/acs";

const JobList = () => {
  const dispatch = useDispatch();
  const jobPosts = useSelector((state) => state.acs.jobPosts);
  const loading = useSelector((state) => state.acs.loading);
  const error = useSelector((state) => state.acs.error);

  useEffect(() => {
    dispatch(fetchJobPosts());
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <div>Error :{error} </div>;
  }
  const getFormattedDate = (dateString) => {
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <div>
      <Navbar />

      {jobPosts.map((job) => (
        <JobItem
          key={job.id}
          company={job.company_name}
          title={job.title}
          location={job.location}
          job_type={job.job_type}
          salary={job.salary}
          expire_date={getFormattedDate(job.expire_date)}
        />
      ))}
    </div>
  );
};

export default JobList;
