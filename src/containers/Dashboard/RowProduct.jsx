import React, { useState, useEffect } from "react";

const RowProduct = (props) => {
  const { id, name, category, status, date, price, image, description } = props;

  useEffect(() => {
    if (status === true) {
      setProductStatus("Active");
    } else {
      setProductStatus("Inactive");
    }
  }, [status]);

  const [isChecked, setIsChecked] = useState(true);
  const [productStatus, setProductStatus] = useState("");
  const [isBadgeDanger, setIsBadgeDanger] = useState(false);
  const [modalId, setModalId] = useState("");

  const toggleProductStatus = () => {
    setIsChecked((prevValue) => !prevValue);
    setProductStatus((prevStatus) => (prevStatus === "Active" ? "Inactive" : "Active"));
    setIsBadgeDanger((prevValue) => !prevValue);
  };

  useEffect(() => {
    setModalId(`exampleModal-${id}`);
  }, [id]);

  const badgeClass = isBadgeDanger ? "badge btn-danger rounded-pill" : "badge btn-success rounded-pill";

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
        <td className="m-0 p-0 ">
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

      <button className="btn bg-white text-dark border-2 shadow-none rounded-pill py-0 ms-0" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
            View
          </button>
    </>
  );
};

export default RowProduct;
