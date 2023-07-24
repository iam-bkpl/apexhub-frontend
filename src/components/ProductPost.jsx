import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import {
  fetchCategorys,
  postProduct,
  postImages,
} from "../redux/actions/ashop";
import LoadingSpinner from "./LoadingSpinner";
import { setProduct } from "../redux/reducers/ashop";

const ProductPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [product_id, setProduct_id] = useState();
  const [id, setID] = useState();

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
  const [imageData, setImageData] = useState({
    image: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    setProductData((prevState) => ({
      ...prevState,
      qr_code: files[0],
    }));
    setImageData((prevState) => ({
      ...prevState,
      image: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("description", productData.description);
    formData.append("price", productData.price);
    formData.append("qr_code", productData.qr_code);
    formData.append("category_id", productData.category_id);

    const response = await dispatch(postProduct(formData));
    const id = await response.payload.id;
    console.log(id);
    await setID(id);
  };

  useEffect(() => {
    setProduct_id(productData);
  }, [productData]);

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    console.log(id);

    const imgData = new FormData();
    imgData.append("product", id);
    imgData.append("image", imageData.image);
    console.log(imgData);

    const img_response = await dispatch(postImages({ id, imgData }));
    console.log(img_response);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    navigate(`/product-detail/${id}/`);
  };

  if (loading) {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  } else {
    return (
      <div className="mt-5 row gy-5 gx-4 justify-content-center">
        <h1 className="p-0 mt-3 text-center">Add Product</h1>
        <hr className="p-0 m-2" />
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
              className="py-2 form-control rounded-6"
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
              className="py-2 form-control rounded-6"
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div className="col-md-10">
            <label className="form-label">
              Select Category<span className="text-danger">*</span>
            </label>

            <select
              className="py-2 form-select rounded-6"
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
              Choose QR Code
            </label>
            <input
              name="qr_code"
              className="py-2 form-control rounded-6"
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
              onReady={(editor) => { }}
              onChange={(event, editor) => {
                setProductData((prevState) => ({
                  ...prevState,
                  description: editor.getData(),
                }));
              }}
              onBlur={(event, editor) => { }}
              onFocus={(event, editor) => { }}
            />
          </div>

          <div className="col-md-10">
            <button
              type="btn btn-primary"
              className="w-auto py-1 mt-4 border col-md-4 "
              onClick={(e) => handleSubmit(e)}
            >
              Save Changes To Continue
            </button>
          </div>
          <div className="col-md-10">
            <label htmlFor="" className="form-label">
              Choose Product Photo
            </label>
            <input
              name="images"
              className="py-2 form-control rounded-6"
              type="file"
              id=""
              onChange={(e) => handleFileChange(e)}
            />
          </div>
          <div className="mt-5 text-center">
            <button
              type="submit"
              className="px-4 btn btn-primary rounded-pill me-3"
              onClick={(e) => handleImageSubmit(e)}
            >
              Add Image
            </button>
            <button
              type="reset"
              className="px-4 text-white btn bg-secondary rounded-5 border-secondary"
            >
              Reset
            </button>
          </div>
          <button className="col-lg-3 btn btn-main" onClick={(e) => handleFinalSubmit(e)}>Done</button>
        </form>
      </div>
    );
  }
};

export default ProductPost;
