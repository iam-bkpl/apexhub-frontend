import LoadingSpinner from "../components/LoadingSpinner";
import React, { useEffect, useState } from "react";
import JobItem from "../components/JobItem";
import { getJobs } from "../api/jobList";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getJobs();
        setJobs(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <div>Error :{error} </div>;
  }
  return (
    <div>
      {jobs.map((job, index) => (
        <JobItem
          key={index}
          company_logo={job.company_logo}
          title={job.title}
          location={job.location}
          job_type={job.job_type}
          salary={job.salary}
          expire_date={job.expire_date}
        />
      ))}
    </div>
  );
};

export default JobList;
