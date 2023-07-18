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

  console.log(jobPosts);
  //fetching jobType from store
  const jobType = useSelector((state) => state.acs.jobPosts);
  useEffect(() => {
    dispatch(fetchJobPosts());
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

  if (loading) {
    return <LoadingSpinner />;
  } else {
    return (
      <section id="special" className="py-5">
        <div className="container">
          <div className="title text-center py-5">
            <h2 className="position-relative d-inline-block">Available Jobs</h2>
          </div>

          <div className="special-list row g-0">
            <div className="d-block justify-content-center text-center mb-4">
              <div className=" flex-wrap justify-content-center my-3 filter-button-group d-inline">
<<<<<<< HEAD
                <button type="button" className="btn m-2  active-filter-btn" data-filter="*">All</button>
                <button type="button" className="btn m-2 " >Remote</button>
                <button type="button" className="btn m-2 " >Hybrid</button>
                <button type="button" className="btn m-2 " >Onsite</button>
              </div>
              <select defaultValue={"default"} className="form-select form-select-lg border shadow-none mb-3 w-auto fs-6 end-0 d-inline float-end" aria-label=".form-select-lg example">
                <option value="default" disabled>Job Type </option>
=======
                <button
                  type="button"
                  className="btn m-2  active-filter-btn"
                  data-filter="*"
                >
                  All
                </button>
                <button type="button" className="btn m-2 ">
                  Remote
                </button>
                <button type="button" className="btn m-2 ">
                  Hybrid
                </button>
                <button type="button" className="btn m-2 ">
                  Onsite
                </button>
              </div>
              <select
                defaultValue={"default"}
                className="form-select form-select-lg border shadow-none mb-3 w-auto fs-6 end-0 d-inline float-end"
                aria-label=".form-select-lg example"
              >
                <option value="default" disabled>
                  Job Type{" "}
                </option>
>>>>>>> master
                <option value="1">Internship</option>
                <option value="2">Entry Level</option>
                <option value="3">Mid Level</option>
                <option value="3">Experienced</option>
              </select>
            </div>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default JobList;
