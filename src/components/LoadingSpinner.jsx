const LoadingSpinner = () => {
  return (
    <div
      className="position-fixed top-0 left-0 d-flex justify-content-center align-items-center h-100 w-100 bg-light"
      style={{ zIndex: 9999 }}
    >
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
