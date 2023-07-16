import React from 'react'

const HotSales = () => {

  return (
    <>
      <section>
        <div className="text-center container py-5">
          <div className="title text-center py-5">
            <h2 className="position-relative d-inline-block">Hot Sales</h2>
          </div>
          <div className="d-flex flex-wrap justify-content-center my-3 filter-button-group">
          </div>
          <div id="product-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row justify-content-center">
                  <div className="col-6 col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="card border-white product-cardd">
                      <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light p-2"
                        data-mdb-ripple-color="light">

                        <a href="#!">
                          <img src="./images/book1.jpg" className="w-100" style={{ height: "250px" }} />
                          <div className="mask">
                            <div className="d-flex justify-content-start align-items-end h-100">
                              <h5 className="product-badge"><span className="badge bg-success ms-2">Eco</span></h5>
                            </div>
                          </div>
                          <div className="hover-overlay">
                            <div className="mask"></div>
                          </div>
                        </a>
                      </div>
                      <div className="card-body">
                        <a href="" className="text-reset">
                          <h5 className="card-title mb-3">Java</h5>
                        </a>
                        <a href="" className="text-reset text-decoration-none">
                          <p>(Category)</p>
                        </a>
                        <h6 className="mb-3 fw-bold">$61.99</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row justify-content-center">
                  <div className="col-6 col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="card border-white product-cardd">
                      <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light p-2"
                        data-mdb-ripple-color="light">

                        <a href="#!">
                          <img src="./images/book3.jpg" className="w-100" style={{ height: "250px" }} />
                          <div className="mask">
                            <div className="d-flex justify-content-start align-items-end h-100">
                              <h5 className="product-badge"><span className="badge bg-success ms-2">Eco</span></h5>
                            </div>
                          </div>
                          <div className="hover-overlay">
                            <div className="mask"></div>
                          </div>
                        </a>
                      </div>
                      <div className="card-body">
                        <a href="" className="text-reset">
                          <h5 className="card-title mb-3">Math</h5>
                        </a>
                        <a href="" className="text-reset text-decoration-none">
                          <p>(Category)</p>
                        </a>
                        <h6 className="mb-3 fw-bold">$61.99</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#product-carousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#product-carousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="text-center mt-5">
            <a className="rounded-pill text-white text-decoration-none py-3 px-5 main-btn" href="./pages/aShop.html">Browse More products</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default HotSales