import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { fetchCategorys, postProduct } from "../redux/actions/ashop";
import LoadingSpinner from "./LoadingSpinner";

const ProductPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [qr_code, setQr_code] = useState(null);

  useEffect(() => {
    dispatch(fetchCategorys());
    setLoading(false);
  }, [dispatch]);

  const categorys = useSelector((state) => state.ashop.categorys);

  const [productData, setProductData] = useState({
    name: "",
    description: "add product description",
    price: "",
    qr_code: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductData((prevState) => ({
      ...prevState,
      qr_code: file,
    }));
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("description", productData.description);
    formData.append("price", productData.price);
    formData.append("qr_code", productData.qr_code);
    formData.append("category_id", productData.category_id);
    dispatch(postProduct(formData));
    console.log(productData);
    navigate(`/product-list/`);
  };
  if (loading) {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  } else {
    return (
      <div className="row gy-5 gx-4 justify-content-center">
        <h1 className="mt-3 p-0 text-center">Add Product</h1>
        <hr className="m-2 p-0" />
        <form
          className="row g-3 col-lg-10 justify-content-center"
          onSubmit={(e) => handleSubmit(e)}
          encType="multipart/form-data"
        >
          <div className="col-md-10">
            <label className="form-label">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="form-control rounded-6 py-2"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="col-md-10">
            <label className="form-label">
              Price <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              name="price"
              className="form-control rounded-6 py-2"
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div className="col-md-10">
            <label className="form-label">
              Select Category<span className="text-danger">*</span>
            </label>

            <select
              className="form-select rounded-6 py-2"
              defaultValue="1"
              name="category"
              onChange={(e) => handleInputChange(e)}
            >
              <option disabled value="">
                Select
              </option>
              {categorys.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md-10">
            <label htmlFor="" className="form-label">
              Choose Photo
            </label>
            <input
              name="qr_code"
              className="form-control py-2 rounded-6"
              type="file"
              id=""
              onChange={(e) => handleFileChange(e)}
            />
          </div>
          <div className="col-md-10">
            <label htmlFor="" className="form-label">
              Description
            </label>

            <CKEditor
              editor={ClassicEditor}
              data={productData.description}
              onReady={(editor) => {}}
              onChange={(event, editor) => {
                setProductData((prevState) => ({
                  ...prevState,
                  description: editor.getData(),
                }));
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </div>
          <div className="text-center mt-5">
            <button
              type="submit"
              className="btn rounded-5 me-3"
              onClick={(e) => handleSubmit(e)}
            >
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
  }
};

export default ProductPost;
