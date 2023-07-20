import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/actions/ashop'
import DashboardSidebar from './Sidebar'
import DashboardNavbar from './Navbar'
import CardBig from './CardBig'
import ProductTable from './ProductTable'

const ProductDashboard = () => {

    const dispatch = useDispatch();
    //Fetching products
    const products = useSelector((state) => state.ashop.products);

    // Filter active and inactive products
    const activeProducts = products.filter((product) => product.is_active);
    const inactiveProducts = products.filter((product) => !product.is_active);

     // Get the total count of active and inactive products
     const totalActiveProducts = activeProducts.length;
     const totalInactiveProducts = inactiveProducts.length;
     const totalProducts = (products.length.toString());

    // calling action method to fetch products and category from backend
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <>
            <div className="container-xxl position-relative bg-white d-flex p-0 mw-100">
                <DashboardSidebar />

                <div className="content nav-content">
                    <DashboardNavbar />

                    <div className="container-fluid pt-4 px-4">
                        <div className="row g-4">
                            <CardBig cardTitle="Total Product" number={totalProducts} iconClass="fa fa-briefcase fa-4x text-primary"/>
                            <CardBig cardTitle="Active Product" number={totalActiveProducts} iconClass="fas fa-business-time fa-4x text-primary"/>
                            <CardBig cardTitle="Inactive Product" number={totalInactiveProducts} iconClass="fa-solid fa-eye-slash fa-4x text-primary"/>
                        </div>
                    </div>

                    <ProductTable />

                </div>

            </div>
        </>
    )
}

export default ProductDashboard