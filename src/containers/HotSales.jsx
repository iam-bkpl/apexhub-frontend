import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/ashop";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

const HotSales = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const featured_products = useSelector((state) =>
    state.ashop.products.filter((product) => product.is_featured === true)
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleProductSelect = (product_id) => {
    navigate(`/product-detail/${product_id}/`);
  };
  const firstThreeProducts = featured_products.slice(0, 3);
  const nextThreeProducts = featured_products.slice(3, 6);

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
                  {firstThreeProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      image={
                        product.images.length > 0 ? product.images[0].image : null
                      }
                      category={product.category}
                      price={product.price}
                      handleClick={() => handleProductSelect(product.id)}
                      is_featured={product.is_featured}
                    />
                  ))}
                  {/* <ProductCard />
                  <ProductCard /> */}
                </div>
              </div>
              <div className="carousel-item">
                <div className="row justify-content-center">
                  {nextThreeProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      image={
                        product.images.length > 0 ? product.images[0].image : null
                      }
                      category={product.category}
                      price={product.price}
                      handleClick={() => handleProductSelect(product.id)}
                      is_featured={product.is_featured}
                    />
                  ))}
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
