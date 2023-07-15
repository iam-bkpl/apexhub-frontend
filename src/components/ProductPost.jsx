import React from "react";

const ProductPost = () => {
  return (
    <div className="row gy-5 gx-4 justify-content-center">
      <h1 className="mt-3 p-0 text-center">Add Product</h1>
      <hr className="m-2 p-0" />
      <form className="row g-3 col-lg-10 justify-content-center">
        <div className="col-md-10">
          <label className="form-label">
            Name <span className="text-danger">*</span>
          </label>
          <input type="text" className="form-control rounded-6 py-2" />
        </div>
        <div className="col-md-10">
          <label className="form-label">
            Price <span className="text-danger">*</span>
          </label>
          <input type="number" className="form-control rounded-6 py-2" />
        </div>
        <div className="col-md-10">
          <label className="form-label">
            Author <span className="text-danger">*</span>
          </label>
          <input type="text" className="form-control rounded-6 py-2" />
        </div>
        <div className="col-md-10">
          <label className="form-label">
            Select Category<span className="text-danger">*</span>
          </label>

          <select className="form-select rounded-6 py-2" defaultValue="">
            <option disabled value="">
              Select
            </option>
            <option value="full-time">Full time</option>
            <option value="part-time">Part time</option>
          </select>
        </div>
        <div className="col-md-10">
          <label htmlFor="" className="form-label">
            Choose Photo
          </label>
          <input className="form-control py-2 rounded-6" type="file" id="" />
        </div>
        <div className="col-md-10">
          <label htmlFor="" className="form-label">
            Description
          </label>
          <textarea
            type=""
            className="form-control rounded-6"
            id=""
            rows="5"
            placeholder="Enter company details..."
          ></textarea>
        </div>
        <div className="text-center mt-5">
          <button type="submit" className="btn rounded-5 me-3">
            Submit
          </button>
          <button
            type="reset"
            className="btn bg-secondary text-white rounded-5 border-secondary"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductPost;
