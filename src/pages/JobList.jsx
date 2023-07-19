import LoadingSpinner from "../components/LoadingSpinner";
import React, { useEffect, useState } from "react";
import JobItem from "../components/JobItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobPosts, postJobVote } from "../redux/actions/acs";
import { useNavigate } from "react-router-dom";
import CompanyLogo from "../assets/defaults/iambkpl.jpg";

const JobList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const jobPosts = useSelector((state) => state.acs.jobPosts);

  const [company_logo, setCompany_logo] = useState(CompanyLogo);

  useEffect(() => {
    dispatch(fetchJobPosts());
    setLoading(false);
  }, []);

  const handleApplyNow = (job_id) => {
    navigate(`/job-detail/${job_id}`);
  };

  const handleVote = async (job_id) => {
    const formData = new FormData();
    formData.append("jobpost", job_id);
    await dispatch(postJobVote({ job_id, formData }));
    await dispatch(fetchJobPosts());
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
          <div className="py-5 text-center title">
            <h2 className="position-relative d-inline-block">Available Jobs</h2>
          </div>

          <div className="special-list row g-0">
            <div className="mb-4 text-center d-block justify-content-center">
              <div className="flex-wrap my-3 justify-content-center filter-button-group d-inline">
                <button
                  type="button"
                  className="m-2 btn active-filter-btn"
                  data-filter="*"
                >
                  All
                </button>
                <button type="button" className="m-2 btn ">
                  Remote
                </button>
                <button type="button" className="m-2 btn ">
                  Hybrid
                </button>
                <button type="button" className="m-2 btn ">
                  Onsite
                </button>
              </div>
              <select
                defaultValue={"default"}
                className="w-auto mb-3 border shadow-none form-select form-select-lg fs-6 end-0 d-inline float-end"
                aria-label=".form-select-lg example"
              >
                <option value="default" disabled>
                  Job Type
                </option>
                <option value="1">Internship</option>
                <option value="2">Entry Level</option>
                <option value="3">Mid Level</option>
                <option value="3">Experienced</option>
              </select>
            </div>
            <div className="tab-content">
              <div id="tab-1" className="p-0 tab-pane fade show active">
                <div>
                  {jobPosts.map((job) => {
                    return (
                      <JobItem
                        key={job.id}
                        id={job.id}
                        company={job.company_name}
                        logo={CompanyLogo}
                        title={job.title}
                        location={job.location}
                        job_type={job.job_type}
                        salary={job.salary}
                        vote_count={job.vote_count}
                        expire_date={getFormattedDate(job.expire_date)}
                        applyNow={() => handleApplyNow(job.id)}
                        vote={() => handleVote(job.id)}
                      />
                    );
                  })}
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
