const ProductCard = (props) => {
  const { name, category, price, image, handleClick } = props;
  return (
    <>
      <div
        className="mb-4 col-6 col-lg-3 col-md-4 col-sm-6 ashop-product-card"
        onClick={handleClick}
      >
        <div className="border-white card product-cardd">
          <div
            className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light"
          >
            <a href="#!">
              <img src={image} className="w-100" style={{ height: "250px" }} />
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
              <h5 className="mb-3 card-title">{name}</h5>
            </a>
            <a href="" className="text-reset">
              <p> {category}</p>
            </a>
            <h6 className="mb-3">Rs.{price}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
