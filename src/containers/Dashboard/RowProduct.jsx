import React, { useState, useEffect } from "react";

const RowProduct = (props) => {
  const { id, name, category, status, date, price, image, description } = props;

  useEffect(() => {
    if (status === true) {
      setProductStatus("Active");
      setIsChecked(true);
    } else {
      setProductStatus("Inactive");
      setIsChecked(false);
    }
  }, [status]);

  const [isChecked, setIsChecked] = useState(true);
  const [productStatus, setProductStatus] = useState("");
  const [modalId, setModalId] = useState("");

  const toggleProductStatus = () => {
    setIsChecked((prevValue) => !prevValue);
    setProductStatus((prevStatus) => (prevStatus === "Active" ? "Inactive" : "Active"));
  };

  useEffect(() => {
    setModalId(`exampleModal-${id}`);
  }, [id]);

  const badgeClass = productStatus === "Inactive" ? "btn btn-danger rounded-pill py-0 px-1 " : "btn btn-success rounded-pill py-0 px-2";

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>{date}</td>
        <td>
          <span className={badgeClass}>{productStatus}</span>
        </td>
        <td className="m-0 p-0">
          <div className="form-check form-switch mx-2 fs-5">
            <input
              className="form-check-input shadow-none"
              type="checkbox"
              role="switch"
              checked={isChecked}
              onChange={toggleProductStatus}
            />
          </div>
        </td>
        <td>
          <button className="btn bg-white text-dark border-2 shadow-none rounded-pill py-0 ms-0" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
            View
          </button>
        </td>
      </tr>
      {/* <!-- Modal --> */}
      <div className="modal fade" id={modalId} aria-labelledby={`${modalId}-label`} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content w-100">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex justify-content-center">
              <div className="card text-center border-white" style={{ width: "21rem" }}>
                <img src={image} className="card-img-top" height="350px" alt="Image" />
                <div className="card-body">
                  <h3 className="card-title text-capitalize">{name}</h3>
                  <p className="card-text" dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>
                <ul className="list-group list-group-flush text-start">
                  <li className="list-group-item text-capitalize">
                    <span className="fw-bold">Name : &nbsp;</span> {name}
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold">Price : &nbsp;</span>
                    {price}
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold">Date: &nbsp;</span>
                    {date}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RowProduct;
