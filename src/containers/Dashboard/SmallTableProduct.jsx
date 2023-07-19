import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from '../../components/LoadingSpinner';
import { fetchProducts } from "../../redux/actions/ashop";

const SmallTableProduct = (props) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // Fetching Products
  const products = useSelector((state) => state.ashop.products);

  useEffect(() => {
    dispatch(fetchProducts());
    setLoading(false);
  }, [dispatch]);

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
  } else {
    // Sort products by date_added in descending order
    const sortedProducts = [...products].sort((a, b) => new Date(b.date_added) - new Date(a.date_added));
    // Get the four most recent products
    const recentProducts = sortedProducts.slice(0, 4);

    return (
      <>
        <div className="col-sm-12 col-xl-6">
          <div className="bg-light-custom rounded table-responsive h-100 p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h4 className="mb-0">Recent Products</h4>
              <Link to="/dashboard-product">Show All</Link>
            </div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col" width="20%">Job&nbsp;Id</th>
                  <th scope="col" width="45%">Name</th>
                  <th scope="col" width="25%">Date</th>
                  <th scope="col" width="20%">Category</th>
                </tr>
              </thead>
              <tbody>
                {recentProducts.map((product) => {
                  return (
                    <tr key={product.id}>
                      <th scope="row">{product.id}</th>
                      <td>{product.name}</td>
                      <td>{getFormattedDate(product.date_added)}</td>
                      <td>{product.category}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
};

export default SmallTableProduct;
