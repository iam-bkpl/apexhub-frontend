const MessageBox = ({ type, message }) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>{{ type }}:</strong> {message}
      <button
        type="button"
        className="btn-close"
        onClick={handleRemoveMessage}
        aria-label="Close"
      ></button>
    </div>
  );
};

export default MessageBox;
