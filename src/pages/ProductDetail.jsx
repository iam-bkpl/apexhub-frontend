import React from 'react'
import img1 from "../assets/testImages/about-1.jpg"
import img2 from "../assets/testImages/about-2.jpg"
const ProductDetail = () => {
    const getFormattedDate = (dateString) => {
        const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
        return formattedDate;
    };
    return (
        <>
            <section className="bg-light">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-5 mt-5">
                            <div className="card mb-3 bg-transparent border-light d-flex align-items-center">
                                <img className="card-img img-fluid border" src={img1} alt="Card image cap" id="product-detail" style={{ height: "330px", width: "350px" }} />
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
                                                        <img className="card-img img-fluid border" src={img2} alt="Product Image 1" />
                                                    </a>
                                                </div>
                                                <div className="col-4 p-1">
                                                    <a href="#">
                                                        <img className="card-img img-fluid border" src={img1} alt="Product Image 2" />
                                                    </a>
                                                </div>
                                                <div className="col-4 p-1">
                                                    <a href="#">
                                                        <img className="card-img img-fluid border" src={img2} alt="Product Image 3" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-4 p-1">
                                                    <a href="#">
                                                        <img className="card-img img-fluid border" src={img1} alt="Product Image 1" />
                                                    </a>
                                                </div>
                                                <div className="col-4 p-1">
                                                    <a href="#">
                                                        <img className="card-img img-fluid border" src={img2} alt="Product Image 2" />
                                                    </a>
                                                </div>
                                                <div className="col-4 p-1">
                                                    <a href="#">
                                                        <img className="card-img img-fluid border" src={img1} alt="Product Image 3" />
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
                            <div className="card border-white">
                                <div className="card-body">
                                    <h1 className="h2">Book Name</h1>
                                    <p className="h3 py-2">$25.00</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <strong>Category:</strong>
                                        </li>
                                        <li className="list-inline-item">
                                            <div className="text-muted"><h6>Book Type</h6></div>
                                        </li>
                                    </ul>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <strong>Description :</strong>
                                        </li>
                                        <li className="list-inline-item">
                                            <div className="text-muted"><h6>It comprehensively covers basic Java concepts such as programming principles, keywords, Java language syntaxes, Java 8 API, JavaBeans, servlets, applets, swing, etc. It is easily available in the market and you can download its PDF version. The book contains 1000+ pages.</h6></div>
                                        </li>
                                    </ul>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <strong>Author :</strong>
                                        </li>
                                        <li className="list-inline-item">
                                            <div className="text-muted"><h6>Author Name</h6></div>
                                        </li>
                                    </ul>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <strong>Posted :</strong>
                                        </li>
                                        <li className="list-inline-item">
                                            <div className="text-muted"><h6>2 days ago</h6></div>
                                        </li>
                                    </ul>

                                    <div className="row pb-3 mt-5">
                                        <div className="col d-grid">
                                            <button type="submit" className="btn btn-primary py-2 btn-md" name="submit" value="buy">Buy</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5 mb-5">
                        <div className="d-flex justify-content-center row">
                            <div className="d-flex flex-column col-md-12">
                                <div className="d-flex flex-row align-items-center text-left comment-top p-2 bg-white border-bottom px-4">
                                    <div className="d-flex flex-column ms-3">
                                        <div className="d-flex flex-row post-title ms-3 ">
                                            <h2 className=''>Add Comment</h2>
                                            <div className="d-flex flex-row align-items-center align-content-center post-title ms-3 d-none">

                                            <span
                                                className="me-2 comments small "
                                                style={{
                                                    textDecoration: "underline",
                                                    textUnderlinePosition: "under",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                13 comments&nbsp;
                                            </span>
                                        </div> 
                                        </div>
                                    </div>
                                </div>
                                <div className="coment-bottom bg-white p-2 px-4">
                                    <div className="d-flex flex-row add-comment-section mt-4 mb-4">
                                        <img
                                            className="img-fluid img-responsive rounded-circle me-2"
                                            src="https://i.imgur.com/qdiP4DB.jpg"
                                            width="60"
                                            alt="Profile"
                                        />
                                        <input
                                            type="text"
                                            className="form-control me-3 py-2 shadow-none rounded-pill"
                                            placeholder=" Add comment"
                                        />
                                        <button className="btn btn-primary rounded-pill" type="button">
                                            Comment
                                        </button>
                                    </div>
                                    <hr/>
                                    {/* Comments */}
                                    <div className="commented-section mt-2">

                                        <div className="d-flex flex-row align-items-center commented-user">
                                            <div className="profile-image">
                                                <img
                                                    className="rounded-circle"
                                                    src="https://i.imgur.com/t9toMAQ.jpg"
                                                    width="45"
                                                    alt="Profile"
                                                />
                                            </div>
                                            <h4 className="ms-3">Roshan Nyaupane</h4><br />
                                            <span className=" ms-2 small text-muted">4 hours ago</span>
                                        </div>
                                        <div className="comment-text-sm ms-5 ps-1 text-muted">
                                            <span> The product looks too expensive but if it is negotiable I can consider.
                                            </span>
                                        </div>
                                        <hr/>
                                    </div>
                                    <div className="commented-section mt-2">

                                        <div className="d-flex flex-row align-items-center commented-user">
                                            <div className="profile-image">
                                                <img
                                                    className="rounded-circle"
                                                    src="https://i.imgur.com/qdiP4DB.jpg"
                                                    width="45"
                                                    alt="Profile"
                                                />
                                            </div>
                                            <h4 className="ms-3">Roshan Nyaupane</h4><br />
                                            <span className=" ms-2 small text-muted">4 hours ago</span>
                                        </div>
                                        <div className="comment-text-sm ms-5 ps-1 text-muted">
                                            <span> The product looks too expensive but if it is negotiable I can consider.
                                            </span>
                                        </div>
                                        <hr/>
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