import React from "react";

const RowUser = () => {
  return (
    <>
      <tr>
        <td>2</td>
        <td>User ko Namee</td>
        <td>01 feb 2023</td>
        <td>external</td>
        <td><span className="badge btn-success rounded-pill">active</span></td>
        <td className=' action-delete  m-0 p-0 '>
          {/* <div className="form-check form-switch mx-2 fs-5 ">
            <input className="form-check-input shadow-none"
              type="checkbox"
              role="switch"
            />
          </div> */}
          <i class="fa-solid fa-pen-to-square p-2  text-primary rounded-pill" style={{cursor:"pointer"}}></i>
          <i class="fa-solid fa-trash  p-2 text-danger rounded-pill" style={{cursor:"pointer"}}></i>
        </td>
      </tr>
    </>
  );
};

export default RowUser;
