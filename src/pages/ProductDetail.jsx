import React from "react";
import { fetchProduct } from "../redux/actions/ashop";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";
import { useState } from "react";
import CommentList from "../containers/CommentList";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const [sellerEmail, setSellerEmail] = useState("seller_email");
  const [images, setImages] = useState();

  const product = useSelector((state) => state.ashop.product);
  const lastImage = product?.images?.slice(-1)?.[0]?.image;

  const sanitizedHTML = DOMPurify.sanitize(product.description);

  useEffect(() => {
    dispatch(fetchProduct(id));
    setLoading(false);
  }, [id]);

  useEffect(() => {
    const sellerEmail = product?.seller?.email ?? "seller_email";
    setSellerEmail(sellerEmail);
  }, [product]);

  useEffect(() => {
    const product_images = product?.images ?? "";
    setImages(product_images);
  }, [product]);

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
  } else if (product && images) {
    return (
      <>
        <section className="bg-light">
          <div className="container pb-5">
            <div className="row">
              <div className="col-lg-5 mt-5">
                <div className="card mb-3 bg-transparent border-light d-flex align-items-center">
                  <img
                    className="card-img img-fluid border"
                    src={lastImage}
                    alt="Card image cap"
                    id="product-detail"
                    style={{ height: "330px", width: "350px" }}
                  />
                </div>
                <div className="row">
                  <div className="col-1 align-self-center">
                    <a
                      href="#multi-item-example"
                      role="button"
                      data-bs-slide="prev"
                    >
                      <i className="text-dark fas fa-chevron-left"></i>
                      <span className="sr-only">Previous</span>
                    </a>
                  </div>

                  <div
                    id="multi-item-example"
                    className="col-10 carousel slide carousel-multi-item mt-5"
                    data-bs-ride="carousel"
                  >
                    <div
                      className="carousel-inner product-links-wap"
                      role="listbox"
                    >
                      <div className="carousel-item active">
                        <div className="row">
                          {images.map((image, index) => {
                            return (
                              <div className="col-4 p-1" key={index}>
                                <a href="#">
                                  <img
                                    className="card-img img-fluid border"
                                    src={image.image}
                                    alt="Product Image 1"
                                  />
                                </a>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-1 align-self-center">
                    <a
                      href="#multi-item-example"
                      role="button"
                      data-bs-slide="next"
                    >
                      <i className="text-dark fas fa-chevron-right"></i>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 mt-5">
                <div className="card border-white">
                  <div className="card-body">
                    <h1 className="h2">{product.name} </h1>
                    <p className="h3 py-2">Rs: {product.price} </p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <strong>Category:</strong>
                      </li>
                      <li className="list-inline-item">
                        <div className="text-muted">
                          <h6>{product.category} </h6>
                        </div>
                      </li>
                    </ul>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <strong>Description :</strong>
                      </li>
                      <li className="list-inline-item">
                        <div className="text-muted">
                          <p
                            dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
                          ></p>
                        </div>
                      </li>
                    </ul>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <strong>Seller :</strong>
                      </li>
                      <li className="list-inline-item">
                        <div className="text-muted">
                          <h6>{sellerEmail} </h6>
                        </div>
                      </li>
                    </ul>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <strong>Posted :</strong>
                      </li>
                      <li className="list-inline-item">
                        <div className="text-muted">
                          <h6>{getFormattedDate(product.date_added)} </h6>
                        </div>
                      </li>
                    </ul>

                    <div className="row pb-3 mt-5">
                      <div className="col d-grid">
                        <button
                          type="submit"
                          className="btn btn-primary py-2 btn-md"
                          name="submit"
                          value="buy"
                        >
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CommentList />
          </div>
        </section>
      </>
    );
  } else {
    return <LoadingSpinner />;
  }
};

export default ProductDetail;
