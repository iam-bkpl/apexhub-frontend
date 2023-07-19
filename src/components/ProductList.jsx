import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts, fetchCategorys } from "../redux/actions/ashop";
import LoadingSpinner from "./LoadingSpinner";

const ProductList = () => {
  const [loading, setLoading] = useState(true);

  const [selectCategory, setSelectCategory] = useState("default");

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

  const handleCategorySelect = (e) => {
    console.log(e.target.value);
  };

  const filteredProducts = useSelector((state) => {
    if (selectCategory === "default") {
      return state.ashop.products;
    } else {
      return state.ashop.products.filter(
        (product) => product.category === selectCategory
      );
    }
  });
  if (loading) {
    return (
      <div className="">
        <LoadingSpinner />;
      </div>
    );
  } else {
    return (
      <section className="py-5">
        <div className="container text-center">
          <div className="py-5 text-center title">
            <h2 className="position-relative d-inline-block">Apex Shop</h2>
          </div>
          <div className="special-list row g-0">
            <div className="mb-4 text-center d-block justify-content-center">
              <div className="flex-wrap my-3 justify-content-center filter-button-group d-inline">
                <button
                  value={selectCategory}
                  type="button"
                  className="m-2 btn active-filter-btn"
                  data-filter="*"
                  onClick={() => setSelectCategory("default")}
                >
                  All
                </button>
                {categorys.map((category) => {
                  return (
                    <button
                      value={selectCategory}
                      type="button"
                      className="m-2 btn "
                      data-filter=""
                      key={category.id}
                      onClick={() => setSelectCategory(category.name)}
                    >
                      {category.name}
                    </button>
                  );
                })}
              </div>
              <select
                value={"bkpl"}
                className="w-auto mb-3 border shadow-none form-select form-select-lg fs-6 end-0 d-inline float-end"
                aria-label=".form-select-lg example"
              >
                <option value="default">Sort </option>
                <option value="internship">Price : Low to High</option>
                <option value="entry_level"> Price : High to Low</option>
                <option value="mid_level">Date added: Newest to Oldest </option>
                <option value="senior_level">
                  Date added: Oldest to Newest
                </option>
              </select>
            </div>

            <div className="row">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  // image={product.images.length > 0 ? product.images[0].image : null}
                  image={product.qr_code}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default ProductList;
