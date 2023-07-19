import React from 'react'
import { useState, useEffect } from 'react';
import RowProduct from './RowProduct'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/ashop';
import LoadingSpinner from '../../components/LoadingSpinner';
import { Link } from 'react-router-dom';


const ProductTable = () => {
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    // fetching from store
    const products = useSelector((state) => state.ashop.products);
    console.log("product table");
    console.log(products)
    // calling action method to fetch products and category from backend
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
        return (
            <div className="">
                <LoadingSpinner />;
            </div>
        );
    } else {
        return (
            <>
                <div className="container-fluid pt-4 px-4">
                    <div className="bg-light-custom text-center rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h5 className="mb-0">Product Management</h5>
                            {/* <Link href="">Show All</Link> */}
                        </div>
                        <div className="table-responsive">
                            <table className="table text-start align-middle table-hover table-hover mb-0">
                                <thead>

                                    <tr className="text-dark">
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Posted Date</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                        <th scope="col">View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => {

                                        return (
                                            <RowProduct
                                                key={product.id}
                                                id={product.id}
                                                name={product.name}
                                                description={product.description}
                                                price={product.price}
                                                image={product.qr_code}
                                                category={product.category}
                                                status={product.is_active}
                                                date={getFormattedDate(product.date_added)}
                                            />
                                        )
                                    }

                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProductTable