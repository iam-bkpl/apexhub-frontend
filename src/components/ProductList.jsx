import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchCategorys } from "../redux/actions/ashop";
import LoadingSpinner from "./LoadingSpinner";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [loading, setLoading] = useState(true);

  const [selectCategory, setSelectCategory] = useState("default");
  const [sortData, setSortData] = useState("default");

  const [sortedProducts, setSortedProducts] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // fetching from store

  const categorys = useSelector((state) => state.ashop.categorys);

  // calling action method to fetch products and category from backend
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategorys());
    setLoading(false);
  }, [dispatch]);

  const filteredProducts = useSelector((state) => {
    // let filtered = state.ashop.products;
    let filtered = state.ashop.products.slice();

    if (selectCategory !== "default") {
      filtered = filtered.filter(
        (product) => product.category === selectCategory
      );
    }
    if (sortData !== "default") {
      switch (sortData) {
        case "price_low_to_high":
          filtered.sort((a, b) => a.price - b.price);
          break;
        case "price_high_to_low":
          filtered.sort((a, b) => b.price - a.price);
          break;
        case "date_newest_to_oldest":
          filtered.sort(
            (a, b) => new Date(b.date_added) - new Date(a.date_added)
          );
          break;
        case "date_oldest_to_newest":
          filtered.sort(
            (a, b) => new Date(a.date_added) - new Date(b.date_added)
          );
          break;
        default:
          break;
      }
    }
    return filtered;
  });

  const handleProductSelect = (product_id) => {
    navigate(`/product-detail/${product_id}/`);
  };

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
                  className="m-2 btn active-filter-btn rounded-pill shadow-none"
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
                      className="m-2 btn rounded-pill shadow-none text-capitalize"
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
                value={sortData}
                className="w-auto mb-3 border shadow-none form-select form-select-lg fs-6 end-0 d-inline float-end"
                aria-label=".form-select-lg example"
                // onChange={(e) => handleSortSelect(e)}
                onChange={(e) => setSortData(e.target.value)}
              >
                <option value={sortData} disabled>
                  Sort
                </option>
                <option value="price_low_to_high">price_low_to_high</option>
                <option value="price_high_to_low">price_high_to_low</option>
                <option value="date_newest_to_oldest">
                  date_newest_to_oldest
                </option>
                <option value="date_oldest_to_newest">
                  date_oldest_to_newest
                </option>
              </select>
            </div>

            <div className="row justify-content-center">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  is_featured={product.is_featured}
                  image={
                    product.images.length > 0 ? product.images[0].image : null
                  }
                  // image={product.qr_code}
                  handleClick={() => handleProductSelect(product.id)}
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
