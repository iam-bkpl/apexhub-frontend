import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../redux/actions/ashop";
import LoadingSpinner from "./LoadingSpinner";

const ProductList = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const products = useSelector((state) => state.ashop.products);

  useEffect(() => {
    dispatch(fetchProducts());
    setLoading(false);
  }, [dispatch]);

  console.log("product list ", products);
  if (loading) {
    return (
      <div className="">
        <LoadingSpinner />;
      </div>
    );
  } else {
    return (
      <section>
        <div class="text-center container py-5">
          <div class="title text-center py-5">
            <h2 class="position-relative d-inline-block">Apex Shop</h2>
          </div>
          <div class="d-flex flex-wrap justify-content-center my-3 filter-button-group">
            <button type="button" class="btn m-2  active-filter-btn" data-filter="*">All</button>
            <button type="button" class="btn m-2 " data-filter="">Books</button>
            <button type="button" class="btn m-2 " data-filter="">Notes</button>
            <button type="button" class="btn m-2 " data-filter="">Solution</button>
            <button type="button" class="btn m-2 " data-filter="">Others</button>
          </div>
          <div class="row">
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
