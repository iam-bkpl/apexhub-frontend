import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/ashop";
import ProductCard from "../components/ProductCard";

const HotSales = () => {
  const dispatch = useDispatch();

  const featured_products = useSelector((state) =>
    state.ashop.products.filter((product) => product.is_featured === true)
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <section>
        <div className="container py-5 text-center">
          <div className="py-5 text-center title">
            <h2 className="position-relative d-inline-block">
              Featured Products
            </h2>
          </div>
          <div className="flex-wrap my-3 d-flex justify-content-center filter-button-group"></div>
          <div
            id="product-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row justify-content-center">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
              </div>
              <div className="carousel-item">
                <div className="row justify-content-center">
                  <div className="mb-4 col-6 col-lg-3 col-md-4 col-sm-6">
                    <div className="border-white card product-cardd">
                      <div
                        className="p-2 bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                        data-mdb-ripple-color="light"
                      >
                        <a href="#!">
                          <img
                            src="./images/book3.jpg"
                            className="w-100"
                            style={{ height: "250px" }}
                          />
                          <div className="mask">
                            <div className="d-flex justify-content-start align-items-end h-100">
                              <h5 className="product-badge">
                                <span className="badge bg-success ms-2">
                                  Eco
                                </span>
                              </h5>
                            </div>
                          </div>
                          <div className="hover-overlay">
                            <div className="mask"></div>
                          </div>
                        </a>
                      </div>
                      <div className="card-body">
                        <a href="" className="text-reset">
                          <h5 className="mb-3 card-title">Math</h5>
                        </a>
                        <a href="" className="text-reset text-decoration-none">
                          <p>(Category)</p>
                        </a>
                        <h6 className="mb-3 fw-bold">$61.99</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#product-carousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#product-carousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="mt-5 text-center">
            <a
              className="px-5 py-3 text-white rounded-pill text-decoration-none main-btn"
              href="./pages/aShop.html"
            >
              Browse More products
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotSales;
