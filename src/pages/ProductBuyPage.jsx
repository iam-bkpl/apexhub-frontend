import React from 'react'

const ProductBuyPage = () => {

    return (
        <>
            
            <div class="container col-lg-6 col-sm-auto col-md-10 py-4 my-4 mx-auto bg-white">
                <div class="header">
                    <div class="row r1">
                        <div class="col-md-9 abc">
                            <h1>Product Name</h1>
                        </div>
                        
                        <p class="col-md-12 text-right para text-decoration-underline m-0">20&nbsp;Comments</p>
                    </div>
                </div>
                <div class="container-body mt-4">
                    <div class="row r3">
                        <div class="col-md-6 order-md-2 text-lg-end mb-4">
                            <img src="https://pipala.com.np/wp-content/uploads/2021/05/esewapipala.jpg" class="img-fluid h-100"style={{width:"85%"}} alt="Product Image" />
                        </div>
                        <div class="col-md-5 p-0 klo order-md-1 mt-4">
                            <ul>
                                <li className='mb-4'><h5>Name : <span className='text-muted h6'>Product Name</span></h5></li>
                                <li className='mb-4'><h5>Price : <span className='text-muted h6'>Product Price</span></h5></li>
                                <li className='mb-4'><h5>Date : <span className='text-muted h6'>Date Added</span></h5></li>
                                <li className='mb-4'><h5>Email : <span className='text-muted h6'>Seller Email</span></h5></li>
                                <li className='mb-4'><h5>Category : <span className='text-muted h6'>Category</span></h5></li>
                                <li className='mb-4'><h5>Seller Name : <span className='text-muted h6'>Seller Email</span></h5></li>
                                <li className='mb-4'><h5>Seller Type : <span className='text-muted h6'>Seller Type</span></h5></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer mt-5">
                    <div class="row r4 ">
                        <div class="col-md-2 myt ">
                            <button type="button" className="btn main-btn"><a href="#" className='text-white px-4'>BUY&nbsp;NOW</a></button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductBuyPage