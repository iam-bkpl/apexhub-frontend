import React, { useState, useEffect } from "react";

const RowUser = (props) => {
  const { id, username, firstname, lastname, date, usertype, status } = props;
  const [userStatus, setUserStatus] = useState("");
  const [isBadgeSuccess, setIsBadgeSuccess] = useState(false);
  const [iconClass, setIconClass] = useState("");

  useEffect(() => {
    if (status) {
      setUserStatus("Active");
      setIsBadgeSuccess(true);
      setIconClass("fa-solid fa-circle-check p-2 text-success rounded-pill");
    } else {
      setUserStatus("Inactive");
      setIsBadgeSuccess(false);
      setIconClass("fa-solid fa-circle-xmark p-2 text-danger rounded-pill");
    }
  }, [status]);

  const toggleUserStatus = () => {
    setUserStatus((prevStatus) => (prevStatus === "Active" ? "Inactive" : "Active"));
    setIsBadgeSuccess((prevValue) => !prevValue);
    setIconClass((prevClass) =>
      prevClass === "fa-solid fa-circle-check p-2 text-success rounded-pill"
        ? "fa-solid fa-circle-xmark p-2 text-danger rounded-pill"
        : "fa-solid fa-circle-check p-2 text-success rounded-pill"
    );
  };

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{username}</td>
        <td>{date}</td>
        <td>{usertype}</td>

        <td>
          <span className={isBadgeSuccess ? "badge btn-success rounded-pill" : "badge btn-danger rounded-pill"}>
            {userStatus}
          </span>
        </td>
        <td className="action-delete m-0 p-0">
          <i className="fa-solid fa-pen-to-square p-2 text-dark rounded-pill" style={{ cursor: "pointer" }}></i>
          <i className={iconClass} style={{ cursor: "pointer" }} onClick={toggleUserStatus}></i>
        </td>
      </tr>
    </>
  );
};

export default RowUser;
