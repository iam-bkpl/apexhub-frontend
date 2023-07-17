import React from 'react'

const ProductDetail = () => {
  return (
    <>
        <section className="bg-light">
        <div className="container pb-5">
            <div className="row">
                <div className="col-lg-5 mt-5">
                    <div className="card mb-3 bg-transparent border-light d-flex align-items-center">
                        <img className="card-img img-fluid border" src="../images/book1.jpg" alt="Card image cap" id="product-detail" style="height: 330px; width: 350px;"/>
                    </div>
                    <div className="row">
                        
                        <div className="col-1 align-self-center">
                            <a href="#multi-item-example" role="button" data-bs-slide="prev">
                                <i className="text-dark fas fa-chevron-left"></i>
                                <span className="sr-only">Previous</span>
                            </a>
                        </div>
                      
                        <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item mt-5" data-bs-ride="carousel">
                   
                            <div className="carousel-inner product-links-wap" role="listbox">

                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-4 p-1">
                                            <a href="#">
                                                <img className="card-img img-fluid border" src="../images/book2.jpg" alt="Product Image 1"/>
                                            </a>
                                        </div>
                                        <div className="col-4 p-1">
                                            <a href="#">
                                                <img className="card-img img-fluid border" src="../images/book1.jpg" alt="Product Image 2"/>
                                            </a>
                                        </div>
                                        <div className="col-4 p-1">
                                            <a href="#">
                                                <img className="card-img img-fluid border" src="../images/book5.jpg" alt="Product Image 3"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                    
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-4 p-1">
                                            <a href="#">
                                                <img className="card-img img-fluid border" src="../images/book2.jpg" alt="Product Image 1"/>
                                            </a>
                                        </div>
                                        <div className="col-4 p-1">
                                            <a href="#">
                                                <img className="card-img img-fluid border" src="../images/book1.jpg" alt="Product Image 2"/>
                                            </a>
                                        </div>
                                        <div className="col-4 p-1">
                                            <a href="#">
                                                <img className="card-img img-fluid border" src="../images/book5.jpg" alt="Product Image 3"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="col-1 align-self-center">
                            <a href="#multi-item-example" role="button" data-bs-slide="next">
                                <i className="text-dark fas fa-chevron-right"></i>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        
                    </div>
                </div>
                
                <div className="col-lg-7 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="h2">Book Name</h1>
                            <p className="h3 py-2">$25.00</p>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <h6>Category</h6>
                                </li>
                                <li className="list-inline-item">
                                    <p className="text-muted"><strong>book Type</strong></p>
                                </li>
                            </ul>

                            <h6>Description:</h6>
                            <p>It comprehensively covers basic Java concepts such as programming principles, keywords, Java language syntaxes, Java 8 API, JavaBeans, servlets, applets, swing, etc. It is easily available in the market and you can download its PDF version. The book contains 1000+ pages.</p>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <h6>Author :</h6>
                                </li>
                                <li className="list-inline-item">
                                    <p className="text-muted"><strong>Author Name</strong></p>
                                </li>
                            </ul>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <h6>Posted :</h6>
                                </li>
                                <li className="list-inline-item">
                                    <p className="text-muted"><strong>2 days ago</strong></p>
                                </li>
                            </ul>

                            <div className="row pb-3 mt-5">
                                <div className="col d-grid">
                                    <button type="submit" className="btn btn-success btn-md" name="submit" value="buy">Buy</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default ProductDetail