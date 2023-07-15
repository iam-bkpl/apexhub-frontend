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
      <div className="container row">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            category={product.category.name}
            price={product.price}
            image={product.images.length > 0 ? product.images[0].image : null}
          />
        ))}
      </div>
    );
  }
};

export default ProductList;
