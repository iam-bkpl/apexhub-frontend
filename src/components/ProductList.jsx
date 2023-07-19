import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts, fetchCategorys } from "../redux/actions/ashop";
import LoadingSpinner from "./LoadingSpinner";

const ProductList = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  // fetching from store
  const products = useSelector((state) => state.ashop.products);
  const categorys = useSelector((state) => state.ashop.categorys);

  // calling action method to fetch products and category from backend
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategorys());
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return (
      <div className="">
        <LoadingSpinner />;
      </div>
    );
  } else {
    return (
      <section>
        <div className="container py-5 text-center">
          <div className="py-5 text-center title">
            <h2 className="position-relative d-inline-block">Apex Shop</h2>
          </div>
          <div className="flex-wrap my-3 d-flex justify-content-center filter-button-group">
            <button
              type="button"
              className="m-2 btn active-filter-btn"
              data-filter="*"
            >
              All
            </button>
            {categorys.map((category) => {
              return (
                <button
                  type="button"
                  className="m-2 btn "
                  data-filter=""
                  key={category.id}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
          <div className="row">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                category={product.category.name}
                price={product.price}
                // image={product.images.length > 0 ? product.images[0].image : null}
                image={product.qr_code}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default ProductList;
