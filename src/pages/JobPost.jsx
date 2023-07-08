import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const JobPost = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="section dashboard">
        <div className="row bg-dark p-3 bg-body rounded mt-4">
          {/* Job Detail Start */}
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
                    <label htmlFor="jobTitle" className="form-label">
                      Job Title <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-6 py-2"
                      id="jobTitle"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">
                      No of vacancy <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control rounded-6 py-2"
                      id=""
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">
                      Job Type <span className="text-danger">*</span>
                    </label>
                    <select
                      id="inputState"
                      className="form-select rounded-6 py-2"
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select
                      </option>
                      <option>on-site</option>
                      <option>remote</option>
                      <option>hybrid</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="" className="form-label">
                      Location <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-6 py-2"
                      id=""
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="" className="form-label">
                      Location <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-6 py-2"
                      id=""
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="" className="form-label">
                      Salary
                    </label>
                    <input
                      type="number"
                      className="form-control rounded-6 py-2"
                      id=""
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="" className="form-label">
                      Company Logo
                    </label>
                    <input
                      className="form-control py-2 rounded-6"
                      type="file"
                      id=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      About The Company
                    </label>
                    <textarea
                      type=""
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
                      data="<h4> About the job </h4> <br/> <b> Job Responsibilities:</b><p>...</p> <br/> <b> Job Requirements</b><p>...</p>"
                      onReady={(editor) => {}}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                      }}
                      onBlur={(event, editor) => {}}
                      onFocus={(event, editor) => {}}
                    />
                  </div>

                  {/* <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      About The Job
                    </label>
                    <textarea
                      type=""
                      className="form-control rounded-6"
                      id=""
                      rows="5"
                      placeholder="Enter job description..."
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Job Responsibility
                    </label>
                    <textarea
                      type=""
                      className="form-control rounded-6"
                      id=""
                      rows="5"
                      placeholder="Enter company details..."
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Qualification/Skills
                    </label>
                    <textarea
                      type=""
                      className="form-control rounded-6"
                      id=""
                      rows="5"
                      placeholder="Enter job description..."
                    ></textarea>
                  </div> */}
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
          {/* End Left side columns */}
        </div>
      </section>
    </>
  );
};

export default JobPost;
