const ProductCard = (props) => {
  const { name, category, price, image } = props;
  return (
    <>
      <div class="col-6 col-lg-3 col-md-4 col-sm-6 mb-4 ashop-product-card" >
        <div class="card border-white product-cardd">
          <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <a href="#!">
              <img src={image} class="w-100" style={{ height: "250px" }} />
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5 class="product-badge"><span class="badge bg-primary ms-2">New</span></h5>
                </div>
              </div>
            </a>
          </div>
          <div class="card-body">
            <a href="" class="text-reset">
              <h5 class="card-title mb-3">{name}</h5>
            </a>
            <a href="" class="text-reset">
              <p>{category}</p>
            </a>
            <h6 class="mb-3">Rs.{price}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
