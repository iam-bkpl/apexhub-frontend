import LoadingSpinner from "../components/LoadingSpinner";
import axios from "axios";
import React, { useEffect, useState } from "react";
import JobItem from "../components/JobItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobPosts } from "../redux/actions/acs";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useNavigate } from "react-router-dom";

const JobList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const jobPosts = useSelector((state) => state.acs.jobPosts);
  const error = useSelector((state) => state.acs.error);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchJobPosts());
    setTimeout(() => {
      setLoading(false);
    }, 10000);
    setLoading(false);
  }, [dispatch]);

  const handleApplyNow = (job_id) => {
    navigate(`/job-detail/${job_id}`);
  };

  const getFormattedDate = (dateString) => {
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return formattedDate;
  };

  if (error) {
    return <div>Error :{error} </div>;
  } else if (loading) {
    return <LoadingSpinner />;
  } else {
    return (
      <div>
        {jobPosts.map((job) => (
          <JobItem
            key={job.id}
            id={job.id}
            company={job.company_name}
            title={job.title}
            location={job.location}
            job_type={job.job_type}
            salary={job.salary}
            expire_date={getFormattedDate(job.expire_date)}
            applyNow={() => handleApplyNow(job.id)}
          />
        ))}
      </div>
    );
  }
};

export default JobList;
