import React from "react";

const Button = ({ text }) => {
  return (
    <div className="">
      <button
        type="button"
        className="btn btn-primary m-2 me-3 bg-primary rounded-pill"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
