const ProductCard = (props) => {
  const { name, category, price, image } = props;
  return (
    <>
      <div className=" col-6 col-lg-3 col-md-4 col-sm-6 mb-4">
        <div className="card border-white product-cardd">
          <div
            className="bg-image hover-zoom ripple ripple-surface ripple-surface-light p-2"
            data-mdb-ripple-color="light"
          >
            <a href="#!">
              <img
                src={image}
                className="w-100"
                style={{ height: "250px" }}
                alt="product - image "
              />
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5 className="product-badge">
                    <span className="badge bg-primary ms-2">New</span>
                  </h5>
                </div>
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-3"> {name} </h5>
            </a>
            <a href="" className="text-reset">
              <p>{category} </p>
            </a>
            <h6 className="mb-3">Rs{price} </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
