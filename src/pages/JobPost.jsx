import React, { Component, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import { postJob } from "../redux/actions/acs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setJobPosts, setJobPost } from "../redux/reducers/acs";

const JobPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  const user = useSelector((state) => state.auth.user);

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
    // navigate("/home");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <section className="section dashboard">
        <div className="p-3 mt-4 rounded row bg-dark bg-body">
          <div className="py-5 container-xxl" data-wow-delay="0.1s">
            <div className="container p-5 border shadow bg-light rounded-5">
              <div className="row gy-5 gx-4 justify-content-center">
                <h1 className="p-0 mt-3 text-center">Post a Job</h1>
                <hr className="p-0 m-2" />
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
                      className="py-2 form-control rounded-6"
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
                      className="py-2 form-control rounded-6"
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
                      className="py-2 form-select rounded-6"
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
                      className="py-2 form-control rounded-6"
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
                      className="py-2 form-control rounded-6"
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
                    <label htmlFor="" className="text-center form-label">
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
                  <div className="mt-5 text-center">
                    <button
                      type="reset"
                      className="px-5 text-white btn bg-secondary rounded-5 border-secondary"
                    >
                      Reset
                    </button>
                    <span className="m-2"></span>
                    <button
                      type="submit"
                      className="px-5 btn btn-primary rounded-5"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobPost;
