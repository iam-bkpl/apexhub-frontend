import React from 'react'

const ProductDetail = () => {
  return (
    <>
        <section class="bg-light">
        <div class="container pb-5">
            <div class="row">
                <div class="col-lg-5 mt-5">
                    <div class="card mb-3 bg-transparent border-light d-flex align-items-center">
                        <img class="card-img img-fluid border" src="../images/book1.jpg" alt="Card image cap" id="product-detail" style="height: 330px; width: 350px;"/>
                    </div>
                    <div class="row">
                        
                        <div class="col-1 align-self-center">
                            <a href="#multi-item-example" role="button" data-bs-slide="prev">
                                <i class="text-dark fas fa-chevron-left"></i>
                                <span class="sr-only">Previous</span>
                            </a>
                        </div>
                      
                        <div id="multi-item-example" class="col-10 carousel slide carousel-multi-item mt-5" data-bs-ride="carousel">
                   
                            <div class="carousel-inner product-links-wap" role="listbox">

                                <div class="carousel-item active">
                                    <div class="row">
                                        <div class="col-4 p-1">
                                            <a href="#">
                                                <img class="card-img img-fluid border" src="../images/book2.jpg" alt="Product Image 1"/>
                                            </a>
                                        </div>
                                        <div class="col-4 p-1">
                                            <a href="#">
                                                <img class="card-img img-fluid border" src="../images/book1.jpg" alt="Product Image 2"/>
                                            </a>
                                        </div>
                                        <div class="col-4 p-1">
                                            <a href="#">
                                                <img class="card-img img-fluid border" src="../images/book5.jpg" alt="Product Image 3"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                    
                                <div class="carousel-item">
                                    <div class="row">
                                        <div class="col-4 p-1">
                                            <a href="#">
                                                <img class="card-img img-fluid border" src="../images/book2.jpg" alt="Product Image 1"/>
                                            </a>
                                        </div>
                                        <div class="col-4 p-1">
                                            <a href="#">
                                                <img class="card-img img-fluid border" src="../images/book1.jpg" alt="Product Image 2"/>
                                            </a>
                                        </div>
                                        <div class="col-4 p-1">
                                            <a href="#">
                                                <img class="card-img img-fluid border" src="../images/book5.jpg" alt="Product Image 3"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div class="col-1 align-self-center">
                            <a href="#multi-item-example" role="button" data-bs-slide="next">
                                <i class="text-dark fas fa-chevron-right"></i>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                        
                    </div>
                </div>
                
                <div class="col-lg-7 mt-5">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="h2">Book Name</h1>
                            <p class="h3 py-2">$25.00</p>
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <h6>Category</h6>
                                </li>
                                <li class="list-inline-item">
                                    <p class="text-muted"><strong>book Type</strong></p>
                                </li>
                            </ul>

                            <h6>Description:</h6>
                            <p>It comprehensively covers basic Java concepts such as programming principles, keywords, Java language syntaxes, Java 8 API, JavaBeans, servlets, applets, swing, etc. It is easily available in the market and you can download its PDF version. The book contains 1000+ pages.</p>
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <h6>Author :</h6>
                                </li>
                                <li class="list-inline-item">
                                    <p class="text-muted"><strong>Author Name</strong></p>
                                </li>
                            </ul>
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <h6>Posted :</h6>
                                </li>
                                <li class="list-inline-item">
                                    <p class="text-muted"><strong>2 days ago</strong></p>
                                </li>
                            </ul>

                            <div class="row pb-3 mt-5">
                                <div class="col d-grid">
                                    <button type="submit" class="btn btn-success btn-md" name="submit" value="buy">Buy</button>
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