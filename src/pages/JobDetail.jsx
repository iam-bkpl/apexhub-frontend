import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobPosts, fetchJobPost, applyJob } from "../redux/actions/acs";
import DOMPurify from "isomorphic-dompurify";
import { useParams } from "react-router-dom";
import defalult_user from "../assets/defaults/default_user.jpg";
import { useState } from "react";


const JobDetail = () => {
  const dispatch = useDispatch();
  const [company_avatar, setCompany_avatar] = useState(defalult_user);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchJobPost(id));
  }, [dispatch]);

  const jobPost = useSelector((state) => state.acs.jobPost);
  const [file, setFile] = useState(null); // State to hold the selected file
  const sanitizedHTML = DOMPurify.sanitize(jobPost.text);

  const getFormattedDate = (dateString) => {
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return formattedDate;
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };


  const handleApply = async (id) => {

    if (!file) {
      alert("Please select a file before applying.");
      return;
    }
    const formData = new FormData();
    formData.append("resume", file);
    formData.append("job", id);
    alert("Submitted Successfully");
     dispatch(applyJob({new_id,formData}));
  };


  useEffect(() => {
    if (jobPost) {
      if (jobPost.user) {
        setCompany_avatar(jobPost.user.avatar);
      } else {
        setCompany_avatar(defalult_user);
      }
    }

  }, [jobPost])

  return (
    <>
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row gy-5 gx-4">
            <div className="col-lg-8">
              <div className="d-flex align-items-center mb-5">

                <img
                  className="flex-shrink-0 img-fluid border rounded"
                  src={`http://localhost:8000${company_avatar}`}
                  // src={company_avatar}
                  alt=""
                  style={{ width: "80px", height: "80px" }}
                />
                <div className="text-start ps-4">
                  <h3 className="mb-3"> {jobPost.title} </h3>
                  <span className="text-truncate me-3">
                    <i className="fa fa-map-marker-alt text-primary me-2"></i>
                    {jobPost.location}
                  </span>
                  <span className="text-truncate me-3">
                    <i className="far fa-clock text-primary me-2"></i>
                    {jobPost.job_type}
                  </span>
                  <span className="text-truncate me-0">
                    <i className="far fa-money-bill-alt text-primary me-2"></i>
                    {jobPost.salary}
                  </span>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></div>

              <div>
                <h4 className="mb-4">Apply For The Job</h4>
                {jobPost && ( // Check if jobPost is available before rendering the Apply Now button
                  <form>
                    <div className="row g-3">
                      <div className="col-12 col-sm-6">
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className="form-control bg-white"
                        />
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100"
                          type="button"
                          onClick={()=>handleApply(jobPost.id)}
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </form>
                )}

              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="bg-white rounded p-5 mb-4 wow slideInUp"
                data-wow-delay="0.1s"
              >
                <h4 className="mb-4">Job Summery</h4>
                <p>
                  <i className="fa fa-angle-right text-primary me-2"></i>
                  Published On:{getFormattedDate(jobPost.expire_date)}
                </p>
                <p>
                  <i className="fa fa-angle-right text-primary me-2"></i>
                  Vacancy: {jobPost.vacancy}
                </p>
                <p>
                  <i className="fa fa-angle-right text-primary me-2"></i>Job
                  Nature: {jobPost.job_type}
                </p>
                <p>
                  <i className="fa fa-angle-right text-primary me-2"></i>Salary:
                  {jobPost.salary}
                </p>
                <p>
                  <i className="fa fa-angle-right text-primary me-2"></i>
                  Location: {jobPost.location}
                </p>
                <p className="m-0">
                  <i className="fa fa-angle-right text-primary me-2"></i>Date
                  Line: 01 Jan, 2045
                </p>
              </div>
              <div
                className="bg-white rounded p-5 wow slideInUp"
                data-wow-delay="0.1s"
              >
                <h4 className="mb-4">Company Detail</h4>
                <p className="m-0">{jobPost.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetail;
