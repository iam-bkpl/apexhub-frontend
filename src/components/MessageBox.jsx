import React from "react";

const MessageBox = (props) => {
  const { className, title, text } = props;

  return (
    <div className={`alert ${className} alert-dismissible fade show`} role="alert">
      {title && <strong>{title}</strong>} {text}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
};

export default MessageBox;
