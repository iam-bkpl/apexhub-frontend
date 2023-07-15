import React, { Component, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import { postJob } from "../redux/actions/acs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setJobPosts, setJobPost } from "../redux/reducers/acs";
import LoadingSpinner from "../components/LoadingSpinner";

const JobPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    setTimeout(() => {
      if (user) {
        if (user.user_type == "external" || user.user_type == "acs") {
          setIsAuthorized(true);
        } else {
          navigate("/");
        }
      } else {
        navigate("/login");
      }
      setLoading(false);
    }, 2000);
  }, [user, navigate]);

  const [jobData, setJobData] = useState({
    title: "",
    vacancy: "",
    jobType: "",
    location: "",
    salary: "",
    description: "",
    text: "<h4> About the job </h4> <br/> <b> Job Responsibilities:</b><p>...</p> <br/> <b> Job Requirements</b><p>...</p>",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postJob(jobData));
    setJobPost(jobData);
    navigate("/home");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  if (!isAuthorized) {
    return null;
  }
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <section className="section dashboard">
          <div className="row bg-dark p-3 bg-body rounded mt-4">
            <div className="container-xxl py-5" data-wow-delay="0.1s">
              <div className="container bg-light border rounded-5 shadow p-5">
                <div className="row gy-5 gx-4 justify-content-center">
                  <h1 className="mt-3 p-0 text-center">Post a Job</h1>
                  <hr className="m-2 p-0" />
                  <form
                    className="row g-3 col-lg-10"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <div className="col-md-4">
                      <label htmlFor="title" className="form-label">
                        Job Title <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-6 py-2"
                        id="title"
                        value={jobData.title}
                        name="title"
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="vacancy" className="form-label">
                        No of vacancy <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="vacancy"
                        className="form-control rounded-6 py-2"
                        id="jobVaccancy"
                        value={jobData.vacancy}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputState" className="form-label">
                        Job Type <span className="text-danger">*</span>
                      </label>
                      <select
                        id="inputState"
                        className="form-select rounded-6 py-2"
                        name="jobType"
                        value={jobData.jobType}
                        onChange={handleInputChange}
                      >
                        <option disabled value="">
                          Select
                        </option>
                        <option value="on-site">on-site</option>
                        <option value="remote">remote</option>
                        <option value="hybrid">hybrid</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="" className="form-label">
                        Location <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={jobData.location}
                        onChange={(e) => handleInputChange(e)}
                        className="form-control rounded-6 py-2"
                        id=""
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="" className="form-label">
                        Salary
                      </label>
                      <input
                        type="text"
                        name="salary"
                        onChange={(e) => handleInputChange(e)}
                        className="form-control rounded-6 py-2"
                        id="salary"
                        value={jobData.salary}
                      />
                    </div>

                    <div className="col">
                      <label htmlFor="" className="form-label">
                        About The Company
                      </label>
                      <textarea
                        type="text"
                        name="description"
                        value={jobData.description}
                        onChange={(e) => handleInputChange(e)}
                        className="form-control rounded-6"
                        id=""
                        rows="5"
                        placeholder="Enter company details..."
                      ></textarea>
                    </div>

                    <div className="">
                      <label htmlFor="" className="form-label text-center">
                        Explain job
                      </label>
                      <CKEditor
                        editor={ClassicEditor}
                        data={jobData.text}
                        onReady={(editor) => {}}
                        //   onChange={(event, editor) => {
                        //     setJobData(editor.getData());
                        //   }}
                        onChange={(event, editor) => {
                          setJobData((prevState) => ({
                            ...prevState,
                            text: editor.getData(),
                          }));
                        }}
                        onBlur={(event, editor) => {}}
                        onFocus={(event, editor) => {}}
                      />
                    </div>
                    <div className="text-center mt-5">
                      <button
                        type="reset"
                        className="btn bg-secondary text-white rounded-5 border-secondary"
                      >
                        Reset
                      </button>
                      <span className="m-2"></span>
                      <button type="submit" className="btn rounded-5">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default JobPost;
